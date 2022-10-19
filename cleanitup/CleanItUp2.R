# Hi Student,

## This assignment is for you to practice some coding before our course and is based on the RyouWithMe unit: CleanItUp 2. 

############# Exercise 1 ############ 
# We've already loaded in the beaches dataset and created the clean_beaches variable for you, so you just need to run the following lines of code to read in the data. You can either highlight the lines and click Run Selected lines or you can move your cursor to the line you want to run and press either CTRL + enter (PC) or command + enter (Mac)
# Use the clean_beaches data to answer the following questions. 

library(tidyverse)
beaches <- read.csv("sydneybeaches.csv")

clean_beaches <- beaches %>%
  as_tibble() %>%
  clean_names() %>%
  rename(beachbugs = "enterococci_cfu_100ml") 

############ Exercise 2 ############ 
# There is one site that has recorded 85 beachbugs, can you find it using arrange()? Type your code below (hint: you'll probably have to open the data in a new tab to see the entire dataframe. To do this you'll have to save your work to a new variable with any name you'd like, so it will appear in your global environment on the right and you can click it to open) :




# What is the name of the site?
# name of site: 

# What is the date given for when it was recorded?
# date: 

# EXTRA: try using filter() instead of arrange() to find the site with 85 recorded beachbugs. Type your code below:




############ Exercise 3 ############ 
# Your goal here is to compare the max and mean beachbugs of Maroubra Beach to Clovelly Beach

# a) Filter the data to get only Maroubra Beach and Clovelly Beach by using filter() and the %in% operator
# b) Add a pipe to arrange the beach bugs in descending order 
# c) Add a pipe to group by site
# d) Add a pipe to get the max beachbugs and mean beachbugs (note: you may have to use na.rm = TRUE)
# e) Type your code and answers below




# max beachbugs Maroubra Beach:
# max beachbugs Clovelly Beach:
# mean beachbugs Maroubra Beach:
# mean beachbugs Clovelly Beach: 