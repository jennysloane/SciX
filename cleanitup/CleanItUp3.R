# Hi Student,

## This assignment is for you to practice some coding before our course and is based on the RyouWithMe unit: CleanItUp 3. 

# You learned a lot of new functions in the CleanItUp3 tutorials, such as separate(), unite(), and mutate(). Here, we will focus solely on mutate() as it's one of the most important and useful functions (I believe at least). Also, in the tutorials there were a few examples using the log function, don't worry too much about that - it was really just used as an example. 

# make sure you load in the data
library(tidyverse)
beaches <- read.csv("sydneybeaches.csv")

clean_beaches <- beaches %>%
  as_tibble() %>%
  clean_names() %>%
  rename(beachbugs = "enterococci_cfu_100ml") 

############ Exercise 1 ############ 
# Compute 2 new columns 
# a) Compute a new column that multiplies beachbugs by 10. Name this column beachbugs10
# b) Compute a new column that says whether beachbugs10 is greater than 100. Name this column beachbugs_logical as it will consist of logical variables (TRUE/FALSE)
# c) Check your work by seeing if all the numbers in beachbugs10 over 100 are recorded as TRUE for beachbugs_logical





# d) Copy and paste your code that you just wrote and now add a pipe "count(beachbugs_logical)" to count the number of TRUES and FALSES. count() is a function that may come in handy during summer school, so I just wanted to introduce it to you here. 




############ Exercise 2 ############ 
# Compute a new column that says if the beachbugs is greater than the MEDIAN of all the beachbugs 




############ Exercise 3 ############ 
# First group by site and then, as you did before, compute a new column that says if the beachbugs is greater than the median of the beachbugs




# Try your best to explain the difference between your results when you included group_by(site) and when you didn't

