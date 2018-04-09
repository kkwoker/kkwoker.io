---
title: "Proving Stable Matching Problem"
date: 2018-01-07T21:01:47-08:00
tags: [mathematics, algorithms]
draft: true
image:
  feature: /images/abstract-10.jpg
---

A perfect matching S is a matching with the property that each member of M and
each member of W appears in exactly one pair in S.


blahblahla

## Gale-Shapely Algorithm

```
Initially all m ∈ M and w ∈ W are free
While there is a man m who is free and hasn't proposed to every woman
  Choose such a man m
  Let w be the highest-ranked woman in m's preference list to whom m has not yet
  proposed
  If w is free then
    (m, w) become engaged
  Else w is currently engaged to m'
    If w prefers m' to m then
      m remains free
    Else w prefers m to m'
      (m, w) become engaged
      m' becomes free
    EndIf
  EndIf
EndWhile
Return the set S of engaged pairs
```


### Thm 0. The algorithm always stops.

Finitely number of preferences

### Thm 1. The algorithm arranges stable marriages.

Proof: Show that no woman can trade up, the husband is the best she can do.

Each man a given woman prefers rejected her on the way. QED

### Thm 2. The algorithm is man-optimal

### Collorary: The algorithm is woman-pessimal
