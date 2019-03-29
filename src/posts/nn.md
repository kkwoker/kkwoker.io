January 29th

World champ Backgammon
Digit Recognition 99.26% accuracy


neurons behave like logic gates, but with continuous values

linear weighted input in the neural net

in_j is input.

a_j is the output, but it is called activation

activation function is some nonliear function. like sigmoid

Sigmoid, now is not so good.
Radial basis function
Gaussian function --> at any point we measure the distance from two
points.

Rectified Linear Unit --> useful for deep learning.

For XOR, even if we have multiple hidden units, since we have linear activation
functions, we cannot solve the XOR problem.

Now given the sigmoid activation functions, it is able to solve it.

Neural net is performing a function composition
two opposite facing sigmoids is a ridge.

two ridges make a bump.

The first two neurons make the ridges, the next layer makes the bump.

Two hidden units. Visualize the dark is strong weights, light is less
weight.

common trick is to add noise to input to force neural net to learn to be
robust. Learn the features that are important, not the ones that are in
the background.

Image analysis tasks.

CNN
feature visualization of vonc net trained on ImageNet.

low level feature -> mid level feature -> high level feature

even the high level features are somewhat hard to interpret.
end is a trainable classifier. give me a label.


Measuring training error.

parametrer optimizationg

error function is super non convex.

no closed form --> use gradient descent.

What is the derivative of my last output wrt to a weight in the begin.

Credit assignment problem in AI. Which weight is responsible. How much
is each weight responsible to the output?

Back propagation.
look at weights connected to output nodes.

How wrong is the output of the hidden units?
Change the weight that feeds into this hidden unit.

Output node, you can see how wrong you are. But how do you see how wrong
hidden nodes are?
--> Back propagation....

For output node k with activation a_k = g(in_k)

g'(in_k)(t_k - a_k)

g' is the derivative of error wrt in_i


Theory: backpropagation _implements_ gradient descent.

correctness proof for backprop.

in_j = a_i * w_ij
d(in_j)/d(w_ij) = a_i

d(in_j)/d(a_i) = w_ij

d(in_j)/d(in_i) = deriv wrt in_i of g(in_i) * w_ij = d(in_j)/d(a_i) * d(a_i)/d(in_i) = w_ij * g'(in_i)


Show that
-dE_n/w_ij = del[j] * a_i

del[j] is the error of the output node j


theorem
for each node j, we have del[j] = -dE_n/in_j
show this equality.

-d(E_n)/d(w_ij) = -d(E_n)/d(in_j) * d(in_j)/d(w_ij) = del[j] * a_i

if we can prove this, then we can show that back propagation is equal to
gradient descent.

backward induction. claim is true for output nodes. --> show this?

del[k] === g'(in_k)(t_k - a_k)

del[k] = 1/2(t_k - a_k)^2
d


interaction term x1x2

limitation of sigmoid comes from the curve itself, not the fact that
it's no negative values.

epoch is one pass over the entire dataset.

we want weights to be independent, but sometimes , since one weight is
large, the other would be large too, codependent.

when we add the regularization term, we say it's not so important to
train the error term.  increasing regularization takes more time to
converge since it doesnt look at error as much as before.

equivalence of SVM and ANN


each hidden node is a support vector



we have a function, we want to approx with nn



