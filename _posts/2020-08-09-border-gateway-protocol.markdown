---
layout: post
title:  Border Gateway Protocol
date:   2020-08-09
categories:
section: 'Life'
description: 'Notes from weekend spent in learning and understanding BGP'
---

This blog post is a story of a weekend I spent learning and understanding the [Border Gateway Protocol](https://en.wikipedia.org/wiki/Border_Gateway_Protocol). This not so ancient protocol came out in March 1996, just almost four years after my birth. It is used by
routers to discover routes from each other automatically. And a little understanding of which comes pretty handy while setting HAVPN tunnels on Google Cloud Platform.

### Background
Last year I picked up a project that got me to work with Mrityunjoy Chattopadhyay, aka Joy. He recently had joined the company and brought a vast amount of industry and networking experience to the table. I am glad I got this opportunity.

This weekend was during the pre-COVID era when we used to go to the office to work. We don't usually do that, working on the weekends. That particular weekend, Joy and I decided to come in and get some significant unblocking done for the current project.

We were setting up a [Shared VPC network](https://cloud.google.com/vpc/docs/shared-vpc) that will be used
to serve production traffic. It will be run in parallel to our current
production system. While that can mean freedom to experiment with
different approaches or ways of doing things, it also meant we needed to
connect our production network with this network. Why? You may ask.
Because the services we wanted to run in the new network had
dependencies in the live production system.

I remember I had so many questions while going to work that day. Why do we need HAVPN tunnels? What is BGP? And what could be the role of BGP while creating these tunnels?

We wanted to serve production traffic on this new network. And
when I say production traffic, I mean transactional requests, not just
read-only or analytical service requests. Thus, we needed redundancy over the tunnels we formed with the current production network. Google Cloud Platform provides ways to create classic tunnels between networks that I had created before using Google Cloud console. While those
tunnels serve their purpose, what if one of them went down? That meant
one of the networks in the new Shared VPC network would not be able to connect to the current production network. 

### HAVPN Tunnels FTW
To avoid this potential outage, we could do many different things. We could either set up manual tunnel failovers or decide always to have a backup tunnel ready. Or auto-heal the system on detecting a tunnel failure by automatically creating a new tunnel to replace the current failed one. Or we could use HAVPN tunnels. As suggested in the name, these tunnels provide High Availability. They do it by leveraging multiple tunnels between the two interfaces of [HAVPN gateways](https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview#ha-vpn). These gateways are associated with cloud router in the given VPC network. Notice that these are all managed services provided by Google Cloud Platform for you.

BGP is not ancient, after all. And it has made the world more accessible. See, we are talking here with each other on the internet. It is a small world, they say. And very rightly so. Courtesy also to the Border Gateway Protocol.


![](google-cloud-havpn-tunnels-routers-and-interfaces.png)

In this image, Router 1 from one network has two established two BGP sessions with Router 2 from another network. Interface 1.1 and 2.1 create a BGP session via tunnel 1 and tunnel 2 (each represents a connection from either side of the tunnel). Interface 1.2 and 2.2 work in the same way. BGP Sessions need to be configured on both sides. 2 interfaces on each side and two-way definition of a tunnel lead to a setup of four tunnels providing two alternative pathways for the requests to flow.


### So What's the fuss?

As the name suggests, BGP works at the borders, borders of the networks. Edge routers aka Border Gateways, as they chose to call them, often sit on either side of the network and provide the capability to the network to talk to other networks. BGP makes the routers discover the path to destination dynamically. Isn't that incredible? Instead of fetching the route-table every time, each router learns the route as it broadcasts packets to its neighbors.

The whole internet is divided into [Autonomous systems](https://en.wikipedia.org/wiki/Autonomous_system_(Internet)), aka AS. An Autonomous System gets its Autonomous System Numbers from International authorities like IANA. These ASNs are mapped to edge routers and help them discover routes from each other. All big companies and organizations have their ASNs. ISPs like Reliance, ACT have ASNs too. With the help of these ASNs, routers establish BGP sessions. On top of those sessions, routers advertise their adjacent networks that peers learn to find the shortest path to their destination. So basically, BGP runs the internet.

### BGP Sessions & BGP Peers
Company-wide networks can also have multiple networks and edge routers sitting on each one of them, enabling them to talk to each other. Now, let's see how we achieve the same with Google Cloud Platform and what key things we need to remember while setting up BGP sessions.

There are two key things to remember while setting up BGP sessions - Peers and Advertised Routes apart from specifying a valid ASN number as these numbers uniquely identify a network.

For two routers to connect, their BGP IP addresses must be in the 169.254.0.0/16 CIDR block in the same /30 subnet e.g. 169.254.0.3, 169.254.0.4 is a valid BGP IP address and peer BGP IP address because they both fall in 169.254.0.3/30 CIDR block. When the connection is established between two routers to exchange BGP information called BGP sessions, they are called BGP Peers. BGP sessions exchange routing information, reliably TCP connections.

### Advertised Routes
While setting up a BGP session, one may also want to specify what all routes one wants to advertise to connected routers using a given router.
Also, these routes are usually advertised with a priority. Priorities play an essential role in the multi-tunnel setup as well. BGP sessions for two tunnels if configured with different priority can lead to active/passive configurations. Let's say router advertises the same route with varying priorities on different interfaces to a destination via two different routes on two BGP sessions; it picks up the route advertised with higher priority number to route traffic, while it switches to the other learned route with low priority once one is down.

After diving into these details and successfully configuring a HAVPN tunnel together, we sat and pair programmed a terraform module that could be used to setup such highly available tunnels between networks on demand.

### Epilog
A few days back, I was creating VPN tunnels between two GCP VPC networks. And I was able to successfully configure BGP sessions without the need for any reference to How-Tos. And I remembered how fruitful the pairing session had been that day for me.

As soon as I hear High Availability, I become curious about what makes the system highly available. And that's what we talked about
most on Saturday, I think. And on Sunday, we revised the concepts and
got much work done because we had covered much ground the day before. All in all, it was a great learning experience as well as it was so much fun to learn some new keywords about networking with Joy.

That's it for this time, folks. See you around soon.

### References
1. [A Border Gateway Protocol 4 (BGP-4, rfc4271)](https://tools.ietf.org/html/rfc4271)
2. [Setting up HAVPN tunnels between two Google Cloud VPCs](https://cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn2)
3. [Terraform example to setup HAVPN Tunnel GCP to GCP](https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway.html#example-usage-ha-vpn-gateway-gcp-to-gcp)
