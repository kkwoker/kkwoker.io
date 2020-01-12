---
slug: "how-to-host-this-site"
title: "How to Host This Site"
date: 2019-06-06
tags: [tech]
draft: false
---

First, you'll need a domain name. I pay for a yearly subscription to
mine using AWS Route53. All you need is an AWS account, go into the
console, navigate to Route53, and under domain registration, search for
your desired domain, follow the steps and proceed to payment.

Then you'll need a location to store your HTML and JavaScript static files.
Since I'm already on AWS, I might as well use the cheap solution of S3
stati site hosting. I just need to upload my static files there, switch
on static site hosting, and viola, I can access my website from the
gross looking s3 public url.

Next, I like to enable CloudFront CDN distribution to get the best out
of content replication over nodes across the globe. This helps speed up
the serving time of my website.

Go on AWS CloudFront and create a distribution. Select Web, and for the
origin domain name, select the S3 bucket that you created for hosting
static websites. The distribution takes about half an hour to create.
I should be able to see a cloudfront domain name for my distribution, mine is
 d146o61d41r0rr.cloudfront.net. Try accessing it to see if your website
can be accessed.

To change the cloudfront domain name to my own, I'll need to switch it to my newly purchased
domain name. Go to Route53 to start by creating a Hosted Zone. A hosted
zone allows you to keep a list of DNS records that route different
subdomains to other parts of the web. Add the following A NAME record:

```
kkwoker.io.  A ALIAS d146o61d41r0rr.cloudfront.net
```

The A type record is an alias record that maps domain name to domain
name, in this case, kkwoker.io to d146o61d41r0rr.cloudfront.net.

To check when my record has been propagated and is accessible from DNSs
around the world, I go to https://dnschecker.org/ to enter in my record
and check that all the regions are resolved.

All of this AWS setup costs me about $1.00 every month. Additionally, my
`.io` registered domain name is renewed for $39.00 once a year. If you buy a
`.com` domain name, it'll be only $12.

And finally... Whenever I make a change to my website locally, I use the
s3_website rubygem from here:
https://github.com/laurilehmijoki/s3_website to automatically sync my
static files to S3 and run a CloudFront invalidation. My deployments are
one command away!

I didn't talk about how I create the static files. But if you're
interested, you can see all the code on my GitHub profile:

> http://github.com/kkwoker/kkwoker.io


Happy coding!
