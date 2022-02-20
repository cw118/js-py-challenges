"""
6 kyu problem from Codewars: Calculate the area of a regular n sides polygon inside a circle of radius r
(https://www.codewars.com/kata/5a58ca28e626c55ae000018a)

Write a function "area_of_polygon_inside_circle(circle_radius, number_of_sides). It should calculate the area of a regular polygon 
of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius 
which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). 
The answer should be a number rounded to 3 decimal places.

This is a simple Python solution using basic high school geometry and trigonometry principles.
"""

from math import sin, cos, radians

def area_of_polygon_inside_circle(circle_radius, number_of_sides):
    # Python's trig ratio functions use radians, so convert angle from degrees to radians
    # Divide polygon into triangles by drawing lines from the center to each vertex
    angle = radians(360 / number_of_sides / 2)
    
    # Find the apothem, which is adjacent to the angle found above
    apothem = circle_radius * cos(angle)
    
    # Find the polygon's side length: the opposite of "angle" is only half the side length
    side_length = 2 * circle_radius * sin(angle)
    
    # The polygon contains n triangles where base = side_length and height = apothem
    # With n being the number_of_sides
    return round((number_of_sides * apothem * side_length / 2), 3)
    