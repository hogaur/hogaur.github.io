---
layout: post
title: Configuring nodes on chef-client run
date:   2020-11-04
categories:
phrases: 'life gojek tech life@gojektech chefclient configurationmanagement'
type: BlogPosting, NewsArticle, Person, Organization, Hackathon, Brand, Atlas, Guide, Chef, ConfirationManagement
section: 'Life'
description: 'learning how to configure Chef Nodes on runtime with chef-client json-attributes flag'
image: ../assets/images/unsplash-cover.jpg
---

### Motivation

While the world is moving towards containerization, docker images, and Kubernetes based deployments, many of us yet have to reach there fully. Managing and configuring Virtual Machines might be an old concept but still isn't a thing of the past, at least in my current organization, and many that I know of, are still running some workloads, if not all, on VMs provided by the cloud providers like GCP, AWS etc. 

Chef is a fantastic tool to configure virtual machines. I have been writing chef cookbooks, recipes, and resources for the better part of the last five years to achieve the desired state for the VMs running in our infrastructure. Chef is convergent in nature and aims to always bring one's VM into the state defined in the chef cookbooks. 


### Background

Chef can be used in myriad of ways to automate the Configuration manangement of VMs. One of them is to host a Chef server in your infrastructure and run the chef-client on the VMs to achieve the desired state. The various steps in a chef-client run can be understood here from this thorough documentation provided by the Chef website - [https://docs-archive.chef.io/release/12-13/chef_client.html#the-chef-client-run](https://docs-archive.chef.io/release/12-13/chef_client.html#the-chef-client-run).

I got to know about a very cool flag in chef-client, enabling one to configure various Chef related options on the VMs on the chef-client run itself. The `--json-attributes` or `-j` optional flag has been used to set up the Chef node components on the first run. But this can be used beyond the first run as well. As the name suggests, this option can be used to set attributes on a chef node. But there is more to it than just setting node attributes. This blog aims to understand what can be set with this option and how this can be done and understand the gotchas around the same.

### Run Lists

Run lists determine the set of recipes that will be run for setting up the machine when the chef-client runs on the VM. You can set run-list using the -j flag like this -

```chef-client -j node-options.json```

where node options can have something like 

```{"run_list": ["recipe[cookbook_name::recipe_name]"]}```

An important thing to note here is that the chef-client resets the run_list on the node with the one provided with `-j` option. So at all times, one needs to be very careful while specifying run_list with the `--json-attributes` option. If you only set one recipe in the run_list by mistake with this optioin, the chef-client run will end up overwriting the run_list for the chef node.

### Chef Tags

Chef tags are useful when you want to categorize or filter the nodes in your infrastructure based on some custom metadata like which team in the organization owns the node. These tags are stored in the form of a free text list that follows the format like - `["team:team_name"]`.

The tags that are set using the `-j` option are only appended to the tags present already on the Chef node. The chef-client run also takes care of de-duplication. What that means is that if a tag `team:lambda` already present on the node, and you pass it again with `-j`, it doesn't get added to the Chef node.

One can pass Tags to chef-client run in JSON like this -

```chef-client -j node-options.json```

where node options can have something like 

```{"tags": ["team:lambda"]}```

Any custom tag can be set using this feature and can be used later to filter nodes based on tag keys and values. Unlike, run_list the `-j` option does NOT reset the tags on each run; it just appends what is missing from the list.

### Node attributes

Apart from run_list and tags, node attributes can also be set with `-j` option. 

```chef-client -j node-options.json```

where node options can have something like 

```{"attribute_name": "attribute_value"}```

These attributes are then used by the recipe to make decisions on run time based on the ruby code that is written in the recipe.  An important thing to note here is that `-j` option can only be used to set `normal` attributes.
To know more about the attribute types in chef and their hierarchy, you can also follow this guide on the chef website - [https://docs.chef.io/attributes/#attribute-types](https://docs.chef.io/attributes/#attribute-types).

### Epilogue
That's it for today, folks. I hope this blog's content will help you better manage your infrastructure with the Chef ecosystem's incredible powers.

I am a Product Engineer, leading the event-driven development framework team in Gojek. On a day to day basis, I work on improving the [Ziggurat framework](https://github.com/gojek/ziggurat) that we have built. This framework powers more than 200 applications at Gojek in production running on both VMs and K8s. If you like what we do, don't forget to star the repo and leave your suggestions and feature requests in Github's issues section.
