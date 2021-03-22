import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CRow 
} from '@coreui/react';
import { DocsLink } from 'src/reusable'

const Accordian = () => {

  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(1)
  const [fade, setFade] = useState(true)

  const toggle = (e) => {
    setCollapse(!collapse)
    e.preventDefault()
  }

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice()
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse)
  }

  const toggleFade = () => {
    setFade(!fade)
  }

  return (
    <CRow>
    <CCol>
        <CCard>
          <CCardHeader>
            <h2>Course Syllabus</h2>
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">OPERATING SYSTEMS CONCEPTS</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                  Linux Commands, Vi editor, Shell Scripting, Overview of OS, Processes, Scheduling & Synchronization,
                  Memory
                  management, File Systems, Case Study with Linux System Programming: Process, Signals, Semaphores &
                  Mutex,
                  Inter – Process Communication, POSIX Threads
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">OOPS WITH C++ PROGRAMMING</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                  Revision of C Programming, Pointers, Functions (Call by value and reference), Recursion, Arrays
                  using
                  Pointers, Structures, Union, Enumeration and Typedef, File handling, Discussion on Object oriented
                  concepts:Classes and Objects, Access Specifiers, Overloading, Inheritance, Polymorphism, Beginning
                  with
                  C++,C++ Tokens, Initialization, C++ Operators, Static Members, Constant Members, Expressions,
                  Control
                  Structure, Functions in C++,Constructors, Encapsulating into an object, Destructors, Associations,
                  Inner
                  Classes, Memory Management and pointers, Inheritance, Virtual Functions, Polymorphism,
                  Interfaces,Exception
                  Handling, Managing Console I/O operations, Working with files,Advance Topics in C++ :Object Design
                  and
                  Templates,STL (Standard Type Libraries), RTTI (Run Time Type Identification), Advanced Typecasting,
                  new data
                  types,new operators, class implementation, namespace scope,operator keywords, new headers, C++
                  Containers.
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">ALGORITHM & DATA STRUCTURES</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                  Define the problem, Identify the problem, Introduction to Problem Solving, Problem solving basics,
                  Defining
                  creativity v/s innovation, Find Creative Solutions using creativity tools Effective problem solving
                  approaches, Critical thinking and information analysis, Brainstorming, Reverse Brainstorming,
                  Imagineering,
                  Mind Mapping, Six Thinking Hats: A Tool to Strengthen Critical Thinking, Collaboration
                  <br/>
                  <b>Evaluate and Select solution :</b>Pro’s and Con’s, Force field analysis, Feasibility/Capability
                  Analysis,
                  Decision analysis, evaluating problems, Choosing among alternatives, Qualitative analysis, discussing
                  qualitative analysis techniques, Establishing objectives <br/>
                  <b>Algorithm & Data Structures:</b> Introductory Concepts, Algorithm Constructs, OO design: Abstract
                  Data
                  Types (ADTs) <br/>
                  <b>Basic Data Structures:</b> Arrays, Stacks, Queues, Linked lists
                  Introduction to trees, Abstract trees, Tree traversals, Binary trees, Search trees, AVL trees
                  Searching & sorting algorithms: Objectives of Searching, The Sequential Search, The Binary Search,
                  Introduction to sorting, Insertion sort, Bubble sort, Heap sort, Merge sort, Quick sort <br/>
                  <b>Graph algorithms:</b>Introduction to graph theory, Graph data structures, Graph traversals <br/>
                  <b>Algorithm design:</b> Greedy algorithms, Divide-and-conquer algorithms, Dynamic programming,
                  Backtracking
                  algorithms, Branch-and-bound algorithms, Application of Data structures
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>
    
  )
}

export default Accordian
