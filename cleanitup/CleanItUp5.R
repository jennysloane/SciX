# Hi Student,

## This assignment is for you to practice some coding before our course and is based on the RyouWithMe unit: CleanItUp 5. 

library(tidyverse)

############ Exercise 1 ############ 
# Make sure to read the text on RYouWithMe carefully in this section because it's important to understand the difference between wide and long data. 

# What does "tidy" data mean? There are 3 points listed in CleanItUp section 5, please type them below

# point 1:
# point 2:
# point 3: 

# When using R, we generally want long data. Although you also learned how to use pivot_wider() to convert data from long to wide, we will focus on pivot_longer() to convert data from wide to long here. 

############ Exercise 2 ############ 
# Complete Challenge 1 from RYouWithMe 

# We've already loaded the data in for you, so all you need to do is use pivot_longer() to convert the data from wide to long. See the images by Alison Hill on the website for help (note: there's 1 typo that should be "cinnamon_1" instead of "cinnamon_1")

bakers_wide <- read.csv("bakers_wide.csv")
bakers_wide




############ Exercise 3 ############ 
# Complete Challenge 2 from RYouWithMe: convert the beachbugs_wide data from wide to long

# Try to do this yourself, but you can always follow along with video 5.1 (note: the names of the beaches have . replacing the spaces so you will have to slightly modify the code)

beach_wide <- read.csv("beachbugs_wide.csv")



############ Exercise 4 ############ 
# Complete Challenge 3 from RYouWithMe

# a) First, note this is a larger dataset, so check out what the as_tibble() function does by comparing the following couple lines of code. Hopefully you'll be able to see that converting the data to what is called a "tibble" makes it easier to quickly glance at your data by only showing the first 10 rows and showing what type of variable each column is (e.g. integer or character)

frames_wide <- read.csv("frames_wide.csv") 
frames_wide

frames_wide_tibble <- read.csv("frames_wide.csv") %>%
  as_tibble()
frames_wide_tibble

# b) Use pivot_longer() to convert the frames_wide_tibble data from wide to long




# c) Compare your results to the results posted on CleanItUp 5. Does it look the same? If not, what's different?
