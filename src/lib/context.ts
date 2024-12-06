/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Markdown formated context to be injected at the beginning of each chat session.
 *
 * For sections, use h2-h6.
 * For data tables, use `csv` code sections, `json` code sections, or |Markdown tables|.
 */
export const context = `
Welcome to Dev Fest 2024 Sri lanka

DevFest Sri Lanka 2024 Conference  is a event uniting developers, tech enthusiasts, and industry leaders for a series of inspiring sessions, and in-depth talks. 
Featuring renowned Google Developer Experts, and influential voices from the tech community, this day will cover the latest advancements in Google technologies such as AI, Google Cloud, Web, Android, Flutter, and more. 
Attendees will have the chance to gain insights, discuss trends, and connect with experts in a collaborative environment.

Here is the schedule: 

# Saturday, December 7
## ML & AI

### Supercharging Gen-AI Applications with Gemini Function Calling
Time :10:00 AM - 11:00 AM (IST)
Location: 6LA
Speaker: Suresh Peiris

Abstract:Suresh Peiris, Co-Founder at Inforwaves and Organizer at GDG Sri Lanka, will delve into "Supercharging Gen-AI Applications with Gemini Function Calling". Learn how this innovative approach is enhancing generative AI applications to be smarter and more efficient.

### Harnessing the Power of LLM Agents
Time :11:00 AM - 12:00 PM (IST)
Location: 6LA
Speaker: Keshan Sodimana

Abstract: Keshan Sodimana, an Associate Architect specializing in Machine Learning, will guide us through "Harnessing the Power of LLM Agents". Discover how these agents are transforming the way AI models operate and solve complex problems.

### Exploring AI in the Browser
Time :12:00 PM - 01:00 PM (IST)
Location: 6LA
Speaker: Mithushan Jalangan
Abstract:Mithushan Jalangan, Co-Founder and Product Engineer at Asyncdot, will explore "Web AI: AI in the Browser". This session unveils the potential of integrating AI directly into web browsers for seamless and intuitive user experiences.
 
## Cloud

### Revolutionizing Fintech with Google Cloud
Time:10:00 AM - 11:00 AM (IST)
Location: 7LA
Speaker: Namrata More
Abstract: Namrata More, Technical Program Manager at Razorpay and Google Developer Expert for Payments, will explore how Google Cloud is revolutionizing Fintech, enabling businesses to scale efficiently and securely.

### Automating Microservice Scaling with KEDA and Google Vertex AI Predictions
Time: 11:00 AM - 12:00 PM (IST)
Location: 7LA
Speaker: Chamod Perera
Abstract: Chamod Perera, Software Engineer II at Circles.Life and CNCF Ambassador, will dive into automating microservice scaling with KEDA and Google Vertex AI for seamless application management.

### Harnessing Google Cloud for Real-Time Problem Solving through Observability
Time: 12:00 PM - 01:00 PM (IST)
Location: 7LA
Speaker: Saurabh Mishra
Abstract: Saurabh Mishra, Google Developer Expert for Cloud, will discuss real-time problem-solving through observability and how Google Cloud can optimize performance in cloud-native environments.

## Firebase

### Power your enterprise Firebase App with the Gemini on Vertex extension
Time: 10:00 AM - 11:00 AM (IST)
Location: 6LB
Speaker: Chamath Ekanayake
Abstract: Chamath Ekanayake, Co-founder at Lynn and CEO at The A.I. Team, will present "Power Your Enterprise Firebase App with the Gemini on Vertex Extension," showcasing how to integrate Gemini AI with Firebase for powerful enterprise solutions.

### Firebase Meets SQL: Use Relational Databases on the Frontend
Time: 11:00 AM - 12:00 PM (IST)
location: 6LB
Speaker: Adithya Narasinghe
Abstract:Adithya Narasinghe, Technical Lead at oDoc, will share insights on "Firebase Meets SQL: Use Relational Databases on the Frontend," exploring how to merge Firebase with relational databases for dynamic front-end development.

### Delivering Personalized User Experience with Firebase
Time :12:00 PM - 01:00 PM (IST)
Location :6LB
Speaker : Ahamed Safnaj
Abstract :Ahamed Safnaj, Senior Software Engineer at Sysco LABS, will discuss "Delivering Personalized User Experience with Firebase," revealing techniques to create highly tailored and engaging user experiences.

## Web

### From Code to Coordinates : Build 3D Maps & Use Gemini Models in Places to Create AI Apps
Time: 02:00 PM - 03:00 PM (IST)
Location: 7LA
Speaker: Buddhika Priyabhashana
Abstract: Buddhika Priyabhashana, Senior Software Engineer at Sysco LABS, will present "From Code to Coordinates: Build 3D Maps & Use Gemini Models in Places to Create AI Apps," exploring 3D mapping and AI integration

### Getting Angular app Up and Running with Standalone Components
Time: 03:00 PM - 04:00 PM (IST)
Location: 7LA
Speaker: Sajeetharan Sinnathurai
Abstract: Sajeetharan Sinnathurai, Google Developer Expert for Web, will discuss "Getting Angular Apps Up and Running with Standalone Components," simplifying Angular development.

### Build AI powered Angular Apps with Google Gemini
Time : 04:00 PM - 05:00 PM (IST)
Location: 7LA
Speaker: Kaveesha Gimhana
Abstract: Kaveesha Gimhana, Postman Student Leader and Software Engineer at CareHires, will share "Building AI-Powered Angular Apps with Google Gemini," showcasing smarter Angular web solutions.

## Flutter

### From Text to Tidbit: Building a Summary App with Generative Al
Time: 02:00 PM - 03:00 PM (IST)
Location: 6LA
Speaker: Abhishek Doshi
Abstract:Abhishek Doshi, Google Developer Expert for Dart, Flutter, and Firebase, will present "From Text to Tidbit: Building a Summary App with Generative AI." Learn how to leverage Flutter and AI to create intelligent summary applications.

### Simplify Your Code: Create Your Own Code Generator Library in Flutter
Time: 03:00 PM - 04:00 PM (IST)
Location: 6LA
Speaker: Chatura Dilan Perera
Abstract: Abhishek Doshi, Google Developer Expert for Dart, Flutter, and Firebase, will present "From Text to Tidbit: Building a Summary App with Generative AI." Learn how to leverage Flutter and AI to create intelligent summary applications.

### Always Within Reach: Building Home Screen Widgets with Flutter
Time :04:00 PM - 05:00 PM (IST)
Location: 6LA
Speaker: Kushan Bhareti
Abstract:  Kushan Bhareti, Co-Founder at Inforwaves, will dive into "Always Within Reach: Building Home Screen Widgets with Flutter." Explore how to design impactful home screen widgets that keep users engaged.

`