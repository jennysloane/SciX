# This script is written for you to learn how to (later in the course) clean your own data and to test your hypotheses.   
# We start with loading the needed libraries.
library(here)
library(dplyr)
library(tidyverse)

# We will start by calling in our fake data. You should have the fake data-set on your Rstudio cloud. We will proceed to manipulating the data in lines 20-43. Last, we will plot the data (lines X-Y) and will run two statistical tests to examine our hypothesis (lines Z-ZZ)

### 1. here ----
# First, we want to ensure that we are in our Rproject, where all the rest of the files are stored. We will do so by using the 'here' function
here()

### 2. read in data ----  
# We will call in the data (file: 'Example_SciX.csv') and will assign it into an object name: 'My_Data'
My_Data = read.csv(file = "Example_SciX.csv")

### 3. head ----
# Now, lets take a brief look into our data. As the R console is too small to display the full table, we will look only at the top part of the table. To do so we will use the 'head' function. 
head(My_Data)

### 4. data structure ----
# Its important to look at structure of your data (i.e. number of columns, their type and the number of rows/observations). For that, we will use the function 'str'. 
str(My_Data)

### 4.1. tidy data ----
#Another way to view your data is a "tidy" way is to convert it to a tibble (which is a simple dataframe). 

My_Data <- My_Data %>%
  as_tibble(My_Data)
  

### 5. change variable type ----
# Hmmmmm..... something is weird... the variable Gender is a type 'int' (int = integer). This means that R consideres females as equal to 0 and male to 1. However, I wanted Gender values (i.e. 0 and 1) to represent categories and not mathematical values (females' value is not 0, right? ;)). We have to tell R to treat those values as categories. The correct type for categorizing a variable in R is a factor/character. We use the function 'as.factor' to change the type of Gender to categories. 
My_Data$Gender = as.factor(My_Data$Gender)
str(My_Data) # Lets look at the columns once again to ensure that our variable's type changed. 

### 6. select rows ----
# Great... but there are still some super silly columns that we can get rid of (unless you are really interested in the link between the number of cats and shoes size). This will make our life easier and we will be able to look only at the columns we are interested in. Remember, our hypothesis is: There is a link between Gender and IQ scores. Here, we will ask R to give us only the columns of interest: 'ID', 'Gender' and 'IQ_Score'. We will assign this new subset-data into a new variable called My_SubData. 

My_SubData = My_Data %>%
  select(ID, Gender, IQ_Score)

### 7. rename ----
# Lets say that now I want to change the name of the IQ_Score column to IQ_TestResults. We can do so by using the 'rename' function within 'dplyr' package (that you should know a bit by now). Super easy.. 
My_SubData = My_SubData %>% rename(IQ_TestResults = IQ_Score) # Voila!

### 8. recode ----
# Now, Gender = 0/1 is not clear enough and that we can later on forget what the categories/coding mean. We can solve this by creating a new column (in dplyr it is called 'mutate') that will contain the letter F if Gender = 0 and the letter M if Gender = 1. We will use the 'recode' function within 'dplyr' package to assign the right letters to the right categories. 
My_SubData = My_SubData %>% 
              mutate(Gender_Name = recode(My_SubData$Gender, "0" = "F", "1" = "M"))

### 9. summary stats ----
# Looking good! Now lets look at some summary statistics. We will use the 'summary' function to investigate the IQ scores of our participants. Also, we will use the function 'table' to know how many men and women we have in our data-set. 
summary(My_SubData$IQ_TestResults)
table(My_SubData$Gender_Name)


### 10. subset/filter ----
# Another useful tool in R is the ability to easily sub-set our data. For instance, we can look at the data of the fifth participant (i.e. ID = 5) only. There are many eays to do so. Here we will use the 'subset' function. This function takes the data you wish to sub-set and 'cuts out' the part of the data-set you wish to obtain. We will assign the fifth participant's data into a new object that is called 'Data_ID5'
Data_ID5 <- My_SubData %>%
  filter(ID == 5) # you should obtain a 1-row data-set that has the details of ID = 5 only. Quiz: what is the IQ score of this participant?


# 10.1. Here is another example of the 'subset' function: Lets say we want to look at the data of those participants with IQ_Score greater than 120.
Data_Partial_IQ <- My_SubData %>%
  filter(IQ_TestResults > 120) # this data-set will have 23 rows in it



### 11. reverse coding ----
# Sometimes surveys have items that need to be "reverse coded", which means that some items are scored in the opposite direction. For example, the impulsivity survey has a scale from 1 (rarely/never) to 4 (almost always/always). Let's look at two items as an example. Item #2 is: "I do things without thinking", so 4 on the scale represents someone who is impulsive. On the other hand, item #1 is: "I plan tasks carefully", so here 4 on the scale represents someone who is NOT impulsive. Therefore, this item must be reverse coded, so we must make 0=4, 1=3, 2=2, 3=1, and 4=0. Here's some code to show you how we can do this easily with R.

# First, I'm going to add fake survey item data, so we can practice reverse coding
My_Data <- My_Data %>%
  mutate(item1 = sample(c(1,2,3,4), 300, replace=TRUE), 
         item2 = sample(c(0,1,2,3,4), 300, replace=TRUE),
         item3 = sample(c(0,1,2,3,4), 300, replace=TRUE))


  # add_column(item1 = round(runif(nrow(.),min=1,max=4)), # this line just creates random numbers between 1 and 4
  #            item2 = round(runif(nrow(.),min=0,max=4)), #  this line just creates random numbers between 0 and 4
  #            item3 = round(runif(nrow(.),min=0,max=4))) # let's pretend this item doesn't need to be reverse coded
  #            
# To reverse code item1, we need to make: 1=4, 2=3, 3=2, 4=1
My_Data %>%
  select(ID, item1) %>%
  mutate(item1_R = recode(My_Data$item1, "1" = "4", # R for reverse
                                               "2" = "3",
                                               "3" = "2",
                                               "4" = "1"))
# double check to make sure item1 is the reverse of item1_reverse!

# To reverse code item1, we need to make: 0=4, 1=3, 2=2, 3=1, 4=0
My_Data %>%
  select(ID, item2) %>%
  mutate(item2_R = recode(My_Data$item1, "0" = "4",
                                               "1" = "3",
                                               "2" = "2",
                                               "3" = "1",
                                               "4" = "0"))

My_Data_reverse <- My_Data %>%
  mutate(item1_R = recode(My_Data$item1, "1" = "4", "2" = "3", "3" = "2", "4" = "1"), 
         item2_R = recode(My_Data$item1, "0" = "4", "1" = "3", "2" = "2", "3" = "1", "4" = "0")) %>%
  select(-c(item1,item2)) # we no longer need item1 and item2 because we have item1_R and item2_R

### 11. plot ----
# we can now start to plot the data we have. To do this, we will use a new function called ggplot and we must load the ggplot2 library
library(ggplot2)
library(ggeasy) # this will come in handy!

# remember, our sample research question is to see if gender is related to IQ? First, let's select only the columns we're interested in
My_Data_Plot <- My_Data %>%
  select(ID, Gender, IQ_Score)

# geom_point() plots a point for every data point. This isn't so informative though, just a lot of dots on top of each other. 
ggplot(My_Data_Plot, aes(x = Gender, y = IQ_Score)) + 
  geom_point() 

# geom_jitter() plots the same as geom_point, but "jitters" the points so not on top of each other (I've also added color in)
ggplot(My_Data_Plot, aes(x = Gender, y = IQ_Score, color=Gender)) + 
  geom_jitter() 

# geom_histogram() plots a histogram
ggplot(My_Data_Plot, aes(IQ_Score, color=Gender)) + 
  geom_histogram(bins = 20) 

# facet_wrap() divides the plot by a selected variable
ggplot(My_Data_Plot, aes(IQ_Score, fill=Gender)) + # note fill here instead of 
  geom_histogram(aes(y = ..density..), bins = 20, color="black") +
  geom_density(bins = 20, alpha=.2) +
  facet_wrap(~Gender) 



# boxplot() plots a boxplot
# this one is especially useful to compare IQ by gender. We can see the red and blue lines are at about the same IQ level, which gives us reason to believe there may not be a difference between male and female IQ (but we'll have to do a statistical test to be confident)
ggplot(My_Data_Plot, aes(x = Gender, y = IQ_Score, color=Gender)) + 
  geom_boxplot()

# let's make this boxplot prettier!

ggplot(My_Data_Plot, aes(x = Gender, y = IQ_Score, color=Gender)) + 
  geom_boxplot() +
  theme_bw() + # changes the theme (I like the black/white theme)
  labs(y = "IQ Score", title = "Male vs Female IQ Scores") + 
  easy_all_text_size(size=20) +
  easy_remove_legend() 
  
  
  
#12. After looking at the plots, we can go ahead and test our hypothesis. We can look at the 't.test' and the 'cor.test' functions to compute the test of differences in means and the correlation, respectively.  

