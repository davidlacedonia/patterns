# Flyweight

The flyweight pattern is purely about efficiency.
Flyeight, comes into play when you have objects that need to be more lightweight, generally because you have too many of them.

The pattern solves that by separating out an object data into two kinds.

**intrinsic state**: stuff that's not specific to a single instance of that object and can be shared across all of them

**extinsic state**: the stuff tha is unique of that instance
