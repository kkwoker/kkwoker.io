---
routeKey: "algorithms-cheat-sheet"
title: "Algorithms Cheat Sheet"
date: 2018-04-11
tags: [mathematics, algorithms]
draft: false
---

##### This list is not extensive nor is it _entirely_ accurate. Just the main facts needed for basic analysis

[Useful Summation Series](https://www.math.uh.edu/~ilya/class/useful_summations.pdf)

![finite sum a k](http://latex.codecogs.com/gif.latex?%5Csum_%7Bk%3D0%7D%5E%7Bn%7Da%5Ek%20%3D%20%5Cfrac%7Ba%5E%7Bn&plus;1%7D%20-%201%7D%7Ba-1%7D)


Data Structures
---------------
#### Binary Tree
#### Max/min Heaps and Priority Queues
#### Max-heapify
```
BUILD-MAX-HEAP(A):
    for i = n/2 downto 1
        MAX_HEAPIFY(A, i)
```

```
MAX_HEAPIFY(A, i):
    if A[i] > A[left(i)] OR A[i] > A[right(i)] then Heapify-down(A, i)
```

Observe MAX_HEAPIFY takes O(1) for nodes that are 1 level above the leaves.

In general, O(l) time for nodes that are l levels above the leaves.

n/4 nodes with level 1,

n/8 nodes with level 2,

...

1 node at log(n) level

Total amount of work in the for loop:
n/4 * (1c) + n/8 * (2c) + n/16 * 3c + 1(clogn)
set n/4 = 2^k
extract a arithmetic series constant out, we get O(n)




#### Linked Lists

Growth of Functions
-------------------

#### Asymptotic notation

ϴ-notation asymptotic tight bound

O-notation asymptotic upper bound

Ω-notation asymptotic lower bound

![O(\log{n}) \leq O(n) \leq  O(n\log{n}) \leq  O(n^k) \leq O(k^n) \leq  O(n!)](http://latex.codecogs.com/gif.latex?O%28%5Clog%7Bn%7D%29%20%5Cleq%20O%28n%29%20%5Cleq%20O%28n%5Clog%7Bn%7D%29%20%5Cleq%20O%28n%5Ek%29%20%5Cleq%20O%28k%5En%29%20%5Cleq%20O%28n%21%29)

![\binom{n}{k} = O(n^k / k!) = O(n^k)](http://latex.codecogs.com/gif.latex?%5Cbinom%7Bn%7D%7Bk%7D%20%3D%20O%28n%5Ek%20/%20k%21%29%20%3D%20O%28n%5Ek%29)

Elementary Graph Algorithms
---------------------------

#### Breadth First Search

```
BFS(G, s)
    for each v ∃ V - {s}
        v.color = WHITE
        v.d = INFINITY
        v.pi = NIL
    s.color = GRAY
    s.d = 0
    s.pi = NIL
    Q = 0
    ENQUEUE(Q, s)
    while Q != 0
        u = DEQUEUE(Q)
        for each v ∃ Adjacent(u)
            if v.color == WHITE
                v.color = GRAY
                v.d = u.d + 1
                v.pi = u
                ENQUEUE(Q, v)
        u.color = BLACK
O(|V| + |E|)
```

#### Depth First Search

```
DFS(G)
    for each u ∃ V
        u.color = WHITE
        u.pi = NIL
    time = 0
    for each vertex u ∃ V
        if u.color == WHITE
            DFS-VISIT(G, u)
DFS-VISIT(G, u)
    time = time + 1
    u.d = time
    u.color = GRAY
    for each v ∃ Adjacent(u)
        if v.color == WHITE
            v.pi = u
            DFS-VISIT(G, v)
    u.color = BLACK
    time = time + 1
    u.f = time
O(|V| + |E|)

```

#### Topological Sorting

```
  call DGS(G) to compute finish times v.f for each vertex v
  as each vertex is finished, insert it onto the front of a linked list
  return the linked list of vertices
```




Divide and Conquer
------------------

#### Substitution Method

![\text{Let } m = \log{n} \\
\text{Let } S(m) = \frac{T(2^m)}{2^m}\\
\begin{align*}
T(n)  &= \sqrt{n}T(\sqrt{n}) + n \\
T(2^m) &= 2^{m/2}T(2^{m/2}) + 2^m \\
\frac{T(2^m)}{2^m} &= \frac{T(2^{m/2})}{2^{m/2}} + 1\\
S(m) &= S(\frac{m}{2}) + 1\\
S(m) &= \Theta (\log{m}) \\
\frac{T(2^m)}{2^m} &= \Theta (\log{m}) \\
T(n) &= n\Theta (\log{\log{n}}) \\
T(n) &= \Theta (n\log{\log{n}}) \\
\end{align*}](http://latex.codecogs.com/svg.latex?%5Ctext%7BLet%20%7D%20m%20%3D%20%5Clog%7Bn%7D%20%5C%5C%20%5Ctext%7BLet%20%7D%20S%28m%29%20%3D%20%5Cfrac%7BT%282%5Em%29%7D%7B2%5Em%7D%5C%5C%20%5Cbegin%7Balign*%7D%20T%28n%29%20%26%3D%20%5Csqrt%7Bn%7DT%28%5Csqrt%7Bn%7D%29%20&plus;%20n%20%5C%5C%20T%282%5Em%29%20%26%3D%202%5E%7Bm/2%7DT%282%5E%7Bm/2%7D%29%20&plus;%202%5Em%20%5C%5C%20%5Cfrac%7BT%282%5Em%29%7D%7B2%5Em%7D%20%26%3D%20%5Cfrac%7BT%282%5E%7Bm/2%7D%29%7D%7B2%5E%7Bm/2%7D%7D%20&plus;%201%5C%5C%20S%28m%29%20%26%3D%20S%28%5Cfrac%7Bm%7D%7B2%7D%29%20&plus;%201%5C%5C%20S%28m%29%20%26%3D%20%5CTheta%20%28%5Clog%7Bm%7D%29%20%5C%5C%20%5Cfrac%7BT%282%5Em%29%7D%7B2%5Em%7D%20%26%3D%20%5CTheta%20%28%5Clog%7Bm%7D%29%20%5C%5C%20T%28n%29%20%26%3D%20n%5CTheta%20%28%5Clog%7B%5Clog%7Bn%7D%7D%29%20%5C%5C%20T%28n%29%20%26%3D%20%5CTheta%20%28n%5Clog%7B%5Clog%7Bn%7D%7D%29%20%5C%5C%20%5Cend%7Balign*%7D)


#### Recursion-Tree Method

#### Master Theorem

![master theorem](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20aT%28n/b%29%20&plus;%20f%28n%29)

1. If ![](http://latex.codecogs.com/gif.latex?f%28n%29%20%3D%20O%28n%5E%7Blog_b%7Ba-%5Cepsilon%7D%7D%29) then ![](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20%5CTheta%28n%5E%7Blog_b%7Ba%7D%7D%29)

2. If ![](http://latex.codecogs.com/gif.latex?f%28n%29%20%3D%20%5CTheta%28n%5E%7Blog_b%7Ba%7D%7D%29) then ![](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20%5CTheta%28n%5E%7Blog_b%7Ba%7D%7D%5Clg%20%7Bn%7D%29)

3. If ![](http://latex.codecogs.com/gif.latex?f%28n%29%20%3D%20%5COmega%20%28n%5E%7Blog_b%7Ba&plus;%5Cepsilon%20%7D%7D%29) then ![](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20%5CTheta%28f%28n%29%29)


#### Muster Theorem
![muster theorem](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20aT%28n%20-%20b%29%20&plus;%20f%28n%29)

1. If ![](http://latex.codecogs.com/gif.latex?a%3C1) then ![](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20O%28n%5Ed%29)
2. If ![](http://latex.codecogs.com/gif.latex?a%3D1) then ![](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20O%28n%5E%7Bd%20&plus;%201%7D%29)
3. If ![](http://latex.codecogs.com/gif.latex?a%3E1) then ![](http://latex.codecogs.com/gif.latex?T%28n%29%20%3D%20O%28n%5E%7Bd%7Da%5E%7Bn/b%7D%29)

Greedy Algorithms
-----------------

#### Minimum Spanning trees
```
GENERIC-MST(G, w)
    A = 0
    while A does not form a spanning tree
        find an edge (u, v) that is safe for A
        A = A U {(u, v)}
    return A
```

```
MST-KRUSKAL(G, w)
    A = 0
    for each v in V
        MAKE-SET(v)
    sort the edges of E into increasing order by weight w
    for each edge (u, v) in E, taken in increasing order by weight
        if FIND-SET(u) != FIND-SET(v)
            A = A U {(u, v)}
            UNION(u, v)
    return A
```

```
MST-PRIM(G, w, r)
    for each u in V
        u.key = INFINITY
        u.pi = NIL
    r.key = 0
    Q = V
    while Q != 0
        u = EXTRACT-MIN(Q)
        for each v in Adjacent(u)
            if v is in Q and w(u, v) < v.key
                v.pi = u
                v.key = w(u, v)
```

#### Activity Scheduling

```
GREEDY-ACTIVITY-SELECTOR(s, f)
    n = s.length
    A = {a_1}
    k = 1
    for m = 2..n
        if s[m] >= f[k]
            A = A U {a_m}
            k = m
    return A

```

#### Cut and Paste argument

eg. Consider any nonempty subproblem S_k, and let a_m be an activity in S_k with
the earliest finish time. Then a_m is included in some maximum-size subset of mutually compatible activities of S_k

PF: Let A_k be a maximum-size subset of mutually compatible activities in S_k and let a_j be the activity in A_k with the earliest finish time. If a_j = a_m, we are done since we have shown that a_m is in some maximum-size subset of mutually compatible activities of S_k. If a_j != a_m let the set A'_k = A_k - {a_j} U {a_m} be A_k be substituting a_m for a_j. The activities in A'_k are disjoint, which follows because the activities in A_k are disjoint, a_k is the first activity in A_k to finish, and f_m <= f_j. Since |A'_k| = |A_k|, we conclude that A'_k is a maximum size subset of mutually compatible activies of S_k and it includes a_m.

Single Source Shortest Paths
----------------------------

```
INITIALIZE-SINGLE-SOURCE(G, s)
    for each v in V
        v.d = INFINITY
        v.pi = NIL
    s.d = 0
```

```
RELAX(u, v, w)
    if v.d > u.d + w(u, v)
        v.d = u.d + w(u, v)
        v.pi = u

```

#### Dijkstra's
```
G is a directed or undirected graph (V, E) with no negative cycles reachable from s
DIJKSTRA(G, w, s)
    INITIALIZE-SINGLE-SOURCE(G, s)
    S = 0
    Q = V
    while Q != 0
        u = EXTRACT-MIN(Q)
        S = S U {u}
        for each v in Adjacent(u)
            RELAX(u, v, w)
```


#### Bellman-Ford

```
G is a directed graph
BELLMAN-FORD(G, w, s)
    INITIALIZE-SINGLE-SOURCE(G, s)
        for i = 1 to |V| - 1
            for each edge (u, v) in E
                RELAX(u, v, w)
        for each edge (u, v) in E
            if v.d > u.d + w(u, v)
                return FALSE "There exists a negative weight cycle reachable by s"
        return TRUE "There is no negative weight cycles reachable by s"

```


Dynamic Programming
-------------------

#### Elements of dynamic programming

#### Longest common subsequence


Maximum Flow
------------

#### Max-Flow Min-Cut Theorem

If f is a flow in a flow network G = (V, E) with source s and sink t, then the following are euivalent:
  1. f is a maximum flow in G.
  2. The residual network Gf contains no augmenting paths.
  3. |f| = c(S, T) for some cut (S, T) of G.

#### Ford-Fulkerson method

```
(u, v).f is the flow along edge (u, v)
FORD-FULKERSON(G, s, t)
    for each edge (u, v) in E
        (u, v).f = 0
    while there exists a path p from s to t in the residual network Gf
        cf(p) = min{ cf(u, v): (u, v) is in p }  // Take the bottleneck edge in p
        for each edge (u, v) in p
            if (u, v) in E
                (u, v).f = (u, v).f + cf(p)
            else
                (v, u).f = (v, u).f - cf(p)

```
O(|E|C) where C is the maximum flow, since the flow value increases by at least 1 unit each iteration

 - Capacity Scaling ~> O(E^2logC) (Looks for the edges with the highest flows first)
 - Edmonds-Karp ~> O(VE^2) (uses BFS to find the augmenting path)

#### Maximum Bipartite matching

NP-Completeness
---------------

#### SAT
#### Independent Set
#### 3-colour

#### Proof techniques

Approximation Algorithms
------------------------

#### Vertex Cover
```
C = 0
E' = G.E
while E' != 0
    let (u, v) be an arbitrary edge of E'
    C = C ∪ {u, v}
    remove from E' every edge incident on either u or v
return C
```
vertex cover whose size is guaranteed to be no more than twice the size of an optimal vertex cover

Since once an edge is chosen, all other edges incident on its endpoints are deleted from E', no two edges in C are covered by the same vertex from C\_opt

Randomized Algorithms
---------------------
