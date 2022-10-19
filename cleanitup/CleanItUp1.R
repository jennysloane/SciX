
# Hi Student,

## This assignment is for you to practice some coding before our course and is based on the RyouWithMe unit: CleanItUp 1. 

############ Exercise 1 ############ 
# In your own words, explain what a pipe %>% is and what <- is:

# Explain %>% :

# Explain <- :

############ Exercise 2 ############ 
# Run the two lines of code to load the necessary libraries. 

library(tidyverse)
library(janitor)

# Read in the messy_names dataframe that I've just made up. Note that the column names are "messy". You should always try to avoid using spaces when naming variables and you should be consistent with how you structure the names. For example, either all lowercase or all uppercase. Have a look at messy_names to see why it's "messy"

messy_names <- tibble(
  "Names of Participants" = c("Peter", "Susan", "Harry", "Emily"),
  AGE = c(12, 18, 32, 22),
  Score = c(54, 93, 87, 70)
)

messy_names

############ Exercise 3 ############ 
# a) tidy the variable names by adding a pipe to the messy_names data and using the clean_names() function
# b) add another pipe to rename the first column to "names"
# c) save this to a new variable called tidy_names to create a new variable with the tidy variable names 
# Type your code below




# the final column names in tidy_names should be "names", "age", and "score". Did you get this?


