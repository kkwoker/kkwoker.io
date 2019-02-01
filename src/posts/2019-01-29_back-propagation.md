---
routeKey: "back-propagation"
title: "Backpropagation - How it works"
imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Artificial_neural_network.svg/1024px-Artificial_neural_network.svg.png"
imageAlt: ""
date: 2019-01-29
tags: [machine learning]
draft: false
---

TODO


Equivalence of neural nets and support vector machines

Bias thing ~

Another Backprop demo
Training issues with activation functions, preprocessing, and
initializing weights

-------------------------


error signal is how far the node is, not really error distance


consider the hidden node,
del[i] = g'(in_i) SUM from j=1 to c  w_ij * del[j]

error at output is calculated from the target value

error at hidden node is the weighted average of all nodes outgoing from
the hidden node.

backpropagation IS gradient descent.
proof -->

https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/differentiating-vector-valued-functions/a/multivariable-chain-rule-simple-version

playground.tensorflow.org


interaction term x1x2

limitation of sigmoid comes from the curve itself, not the fact that
it's no negative values.

epoch is one pass over the entire dataset.

we want weights to be independent, but sometimes , since one weight is
large, the other would be large too, codependent.

when we add the regularization term, we say it's not so important to
train the error term.  increasing regularization takes more time to
converge since it doesnt look at error as much as before.




