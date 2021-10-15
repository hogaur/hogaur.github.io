---
layout: post
title: The Zen of an Ideal Team
date:   2018-05-22
categories:
section: 'Life'
description: 'Building a lean, productive, and efficient team building strategies'
---

![](zen.jpeg)

*As originally published on [Gojek Product+Tech blog](https://blog.gojekengineering.com/the-zen-of-an-ideal-team-27f1a52b8fd2)*

I work with a team that helps in stabilising infrastructure and improving uptime for 300+ microservices at GOJEK. During our team’s last inception meeting ([kick-off meeting](https://tanzu.vmware.com/content/blog/inception-knowing-what-to-build-and-where-you-should-start)), we came up with a set of 19 ground rules. Most of these ground rules can be subjects of a blog post themselves. This post tries to present them concisely.

Idealism is subjective. While an ideal way to function can vary for individuals, these ground rules help us move towards our goal despite all the turbulence. At any point in time, we can scan the list and see where we stand. Especially when we retrospect our iterations and products.

### Stay small, stay focused
> According to [Brooks Law](https://en.wikipedia.org/wiki/Brooks%27s_law#Explanations), there are n(n-1)/2 potential communication channels in a team of ’n’ members.

Due to this combinatorial explosion, with increasing number of members in a team, information loss is inevitable. To reduce this communication overhead, we apply ‘The Unix philosophy’, of [doing one thing and doing it well](https://en.wikipedia.org/wiki/Unix_philosophy#Do_One_Thing_and_Do_It_Well) to working in a team.

To move fast, the team should work towards a common goal. A team should be solving one problem at a time. We do that by making a small stream of two pairs dedicated to a task. This way, additional work can be easily parallelised as we add more work-streams in the future.

### Imbibe software craftsmanship

![](craftsmapship.jpeg)
[source](https://www.cladglobal.com/architecture-design-features?codeid=28911)

> It’s not enough to have working software — we want well-crafted software.

A craftsman practices his art by honing his skills constantly and iterating consistently. As a sculptor knows his chisels, team members must have an in-depth understanding of their tools; be it their editor, shell utilities, or an Open Source product used in their tech stack.

> Great teams are built by constant encouragement and constructive criticism

In our team, we have ‘Open Fridays’. We dedicate this time to work on Open Source projects and blog about our work. Here’s one of our Open Source contributions named [Heimdall](https://github.com/gojek/heimdall), and a blog on [resiliency in distributed systems](https://blog.gojekengineering.com/resiliency-in-distributed-systems-efd30f74baf4), which have come out of our teams’ Open Friday sessions.

> Self-discipline first

Apart from a predefined skill-set, we value each other’s time and be more productive together. For this, we follow ‘Core Working hours.’ Core Working hours start with our daily standup. We dedicate this time for pairing and schedule our meetings and catch-ups outside of core working hours.

> Computers do not solve problems, they execute solutions

In order to build meaningful software which can be used by other developers, we have a basic developer hygiene in place. It includes simple practices like trunk based development, test first development, production-ready commits and maintaining code quality metrics of codebases.

> We follow the Rule of Three

If any task is duplicated more than thrice, we refactor/automate the code/process. This comes in handy as it asks to build the solution and iterate on it to improve. Automation is at the core of everything we do. Our lean engineering mindset is imbibed from our CTO, [Niranjan Paranjape](https://medium.com/@niranjan.p). Read my colleague’s post to understand our [emphasis on automation](https://blog.gojekengineering.com/how-we-do-what-we-do-at-go-jek-tech-d1d5d952e13).

> Boring, but important

We believe in documentation of our work. Be it self-documenting unit test driven code, or through a wiki of our projects. We aim to maintain a high level of documentation to avoid any hassles of on-boarding and collaborating with other developers who come on board.

### Measure and improve

![](feedback.png)

[source](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8a4f8d2c-5f71-4233-b4ac-a135a970521a/floops-loops.png)

We need feedback. We crave for it.

This helps us improve upon:
- Product
- Design
- Execution.

#### Iterate, Iterate, Iterate.

We’ve never developed something perfect in its first iteration. Nor have we arrived at an ultimate process of building software since the inception of our team.

These are hard problems — to perfectly predict what a user needs, or to optimize the utilization of resources a team has. So we iterate, measure and improve. And feedback is the thread that weaves iterations and carries the inputs/concerns during the development process.

It’s also important to quantify the feedback and get it into some form of action items. In fact, we believe we should measure each and everything about our deliveries and the process around them. e.g. we measure number of deployments, truck factor and tech debt in our team.

### Adaptive
In a quest for constant innovation, we continue to strive for a better product. Along comes business requests and impromptu tasks such as fixing a system- wide vulnerability like a meltdown. So in a way, it feels like “No moving targets” is a fallacy for an agile team.

> As a team we try to find balance between the constant flux in business requirements and the resultant churn. We want to be flexible enough to incorporate new features and fixes while being able to maintain the clarity on what we deliver.

To tackle this, we have set iteration times in our team to a week. By reducing our iteration time, we can freeze the scope of work we are targeting. At the same time, this also helps us deal with the incoming surge of new work on a weekly basis.

By making our iterations small, it lets us evaluate our progress and receive feedback early so amends can be made.

### Conclusion

We have our team’s OKRs defined and track our progress. To track the teams’ progress, we also look for some visual tools to gain insights and keep a tab on increasing/decreasing trends on metrics. E.g. we maintain a story wall, ice-cream meter, pairing matrix and iteration ratings in our team. (What’s an ice cream meter you ask? Ping me separately, and I’ll explain 😉)

Having said that, we were never meant to be an ideal team. We are on a path of continuous betterment because we’re always learning. We aim to follow these rules religiously, but at the same time our definition of an ideal team will keep evolving with time.

> Our consensus happens with consistent dissent.

As we walk this path, our own performance bars keep rising and an innate hunger to learn keeps us wanting more and cohesive as a unit.

