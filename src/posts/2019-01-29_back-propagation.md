---
routeKey: "back-propagation"
title: "Backpropagation"
imageSrc: "https://www.electronicdesign.com/sites/electronicdesign.com/files/styles/article_featured_standard/public/0718TR_Promo.jpg?itok=t70vFYFv"
imageAlt: ""
date: 2019-01-29
tags: [machine learning]
draft: true
---


Backpropagation is an efficient method for computing error derivatives
for every node in a neural network. But why does this method work? We
know that gradient descent is used to find local minimums in a linear
classifier, so if we can show that Backpropagation is equivalent to gradient descent for neural networks,
then we can show that backpropagation can also find local minimums!

Algorithm for backpropagation:

1. Calculate derivatives for weights connecting to the output layer
   nodes.
2. In the layer previous to the output layer, calculate error derivatives
   of these nodes by using the errors of the weights calculated in the
   output layer.
3. Repeat this process of calculating derivatives for all further layers until we reach the
   input layer.

This is what's meant by propagating the output error signal backwards
through the network.

Notation
---------

- $x_n$ : training example $n$
- $a_i$ : activation of node $i$
- $in_k$ : input of node $k$
- $w_{ik}$ : weight on edge from node $i$ to node $k$
- $g(.)$ : activation function
- $t_k$ : target value
- $\Delta_k$ : the error signal at node $k$

At node $k$, the activation is defined as $a_k = g(in_k) = g(\sum_i{w_{ik}a_i})$
where nodes $i$ are nodes with incoming edges to node $k$.

At the output node $k$, the error signal is defined as:
$$ \Delta_k \equiv g'(in_k)(t_k - a_k) $$

and the weight update is:

$$ w_{ik} \leftarrow w_{ik} + \eta a_i \Delta_k $$

We can recognize that $\eta$ is the step size and $a_i \Delta_k$ is the
gradient.

At the hidden node $j$ connected to the output node $k$, the error
signal $\Delta_i$ is the node activation derivative times the weighted
sum of connected error signals.

$$\Delta_j = g'(in_j)\sum_k{w_{jk}}\Delta_k \tag{1}$$


Correctness Proof for Backpropagation
-------------------------------------

Consider the funational diagram:

$$ in_i \overset{g}{\rightarrow} a_i \overset{a_iw_{ij}}{\rightarrow} in_j$$

- $\frac{\partial in_k}{\partial w_{jk}} = a_i$
- $\frac{\partial in_k}{\partial a_j} = w_{ij}$
- $\frac{\partial in_k}{\partial in_j} = \frac{\partial in_j}{\partial a_i} \cdot \frac{\partial a_i}{\partial in_i} = w_{ij} \cdot g'(in_i)$

By showing that $-\frac{\partial E_n}{w_{ij}} = a_i\Delta_j $ then we
can show that backpropagation is equivalent to gradient descent.

Recall Multivariate Chain Rule:

For $f(x, y)$:

$$\frac{\partial f}{\partial u} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial u}$$

Since $-\frac{\partial E_n}{w_{ij}} = -\frac{\partial E_n}{in_j} \cdot \frac{\partial in_j}{w_{ij}} = \Delta_j \cdot a_i$ then we just need to prove $-\frac{\partial E_n}{in_j} = \Delta_j$

$\frac{\partial E_n}{in_j} = \frac{\partial}{in_j}E_n(in_{k_1}, in_{k_2}, ..., in_{k_m})$
where $k_i$ are the nodes that receive input from $j$

$$
\frac{\partial E_n}{in_j} = \sum_k\frac{\partial E_n}{in_k}\frac{\partial in_k}{in_j} \\
$$
$$
= \sum_k\Delta_k\frac{\partial in_k}{in_j}
$$
$$
= \sum_k\Delta_kw_{jk}g'(in_j) = \Delta_j
$$
The last equality is from the definition from eq (1).

Through induction, this proof can be realized.
Therefore, backpropagation is gradient descent!
