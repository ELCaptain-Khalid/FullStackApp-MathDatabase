/* Creating  a database for the site so that the page can be well served and the information and imported properly */
create database Munassar_Final;
use Munassar_Final;
CREATE TABLE Mathematicians (
	id   INTEGER  AUTO_INCREMENT NOT NULL,
    Name     	VARCHAR(1000),
	Country       	VARCHAR(1000),
	Born  Date NOT NULL,
    Died  Date   ,
    Notable Work  VARCHAR(1000),
    Area of Focus VARCHAR(1000)
    
);


Insert into Mathematicians (ID, Name, Country, Born, Died, Notable Work, Area of Focus)
Values (1, 'Paul Erdős', 'Austria-Hungary',1913, 1996, 'He was one of the most prolific mathematicians and producers of mathematical conjectures[2] 
                                                        of the 20th century.[3] 
                                                        He was known both for his social practice of mathematics'
                                                    , 'Discrete Math and cracking unsolvable problems' );

Insert into Mathematicians (ID, Name, Country, Born, Died, Notable Work, Area of Focus)
Values (1, 'Terence Tao', 'Australian-American', 1975, , 'awarded a Fields Medal in 2006 “for his contributions to partial differential equations, 
                                                          combinatorics, harmonic analysis and additive number theory.'
                                                       , 'the theory of partial differential equations.');

Insert into Mathematicians (ID, Name, Country, Born, Died, Notable Work, Area of Focus)
Values (1, 'Katherine Johnson   ', 'American', 1918, , 2020, 'Her calculations helped launch the space missions of Alan Shepard and John Glenn. 
                                                              She was crucial to the Apollo program and won a Congressional Gold Medal and a Presidential Medal of Freedom for her achievements.'
                                                            , ' Geometry for Space Travel');
/* =========================================================================================== */

CREATE TABLE MathProblems (
	Id   INTEGER  NOT NULL,
    Scope     	VARCHAR(1000),
	Solved       	BOOLEAN,
    Details  VARCHAR(1000),
    Mathematicians VARCHAR(1000)
    
);

insert into MathProblems (ID,Scope, Solved , Details, Mathematicians)
Values (1,'Discrete Math', TRUE, 'cycles with lengths equal to a power of two in graphs with minimum degree 3.', 'Paul Erdos')


insert into MathProblems (ID,Scope, Solved , Details, Mathematicians)
Values (1,'Differential Equations', TRUE, 'The Erdős Discrepancy Problem', 'Terrenece Tao')