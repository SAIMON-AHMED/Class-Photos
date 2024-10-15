# Class Photos

This repository contains a function classPhotos that determines whether a group of students can be arranged in two rows for a class photo, such that every student in the back row is strictly taller than the student directly in front of them. The students are divided into two groups: one group wears red shirts, and the other wears blue shirts.

**Problem Description**

Given two arrays:

redShirtHeights: An array of positive integers representing the heights of students wearing red shirts.

blueShirtHeights: An array of positive integers representing the heights of students wearing blue shirts.

The goal is to determine if it's possible to arrange the students in two rows (one row for red-shirted students and one for blue-shirted students) such that:

Every student in the back row is strictly taller than the student in front of them.

**Example**
	
	const redShirtHeights = [5, 8, 1, 3, 4];
	const blueShirtHeights = [6, 9, 2, 4, 5];
	
	const result = classPhotos(redShirtHeights, blueShirtHeights);
	console.log(result); // Output: true
 
In this example, after sorting both arrays, the students can be arranged such that all students in the back row (blue shirts) are taller than those in the front row (red shirts).

**Code Explanation**

classPhotos(redShirtHeights, blueShirtHeights)

**Input:**

Two arrays: redShirtHeights and blueShirtHeights.

**Output:**

A boolean value (true or false).

**Steps:**

1. Sort both arrays in ascending order.
2. Compare the tallest students in both groups (the last element in each sorted array) to determine which group should stand in the back row.
3. If the red-shirted group is taller overall, ensure that every red-shirted student is taller than their corresponding blue-shirted student. If the blue-shirted group is taller, ensure the opposite.
4. Return true if the condition holds for all students, otherwise return false.

**Time and Space Complexity**

Time Complexity: O(n log n), where n is the number of students in each group. This is due to the sorting operation.

Space Complexity: O(1), since no additional space is required other than input arrays, which are sorted in place.



**License**: This project is licensed under the MIT License - see the LICENSE file for details.
