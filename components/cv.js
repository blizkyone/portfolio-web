import React from "react";

const CV = () => {
  return (
    <div>
      <p className="font-bold my-4">Studies</p>
      <ul className="my-2 list-disc ml-4">
        <li>
          <p>2005 - 2009</p>
          <p>
            Industrial Engineering degree by the Anahuac University of Mexico,
            northern campus
          </p>
        </li>
        <li>
          <p>2005 - 2010</p>
          <p>
            Magister in religious studies (phiosophy, history, liberal arts) by
            the Pontifical Atheneum Regina Aposotolorum
          </p>
        </li>
        <li>
          <p>2009 - 2011</p>
          <p>
            Partial studies in the fields of philosophy and the humanities,
            first in Rome and then in a Catholic Seminary in Cheshire CT
          </p>
        </li>
      </ul>
      <p className="font-bold my-4">Working Experience</p>
      <ul className="my-2 list-disc ml-4">
        <li>
          <p>2000 - 2009</p>
          <p>
            Participated as an aide and group leader in diverse formative summer
            camps and retreats for youth
          </p>
        </li>
        <li>
          <p>2009 - 2010</p>
          <p>Assistant for the office of Church and Sports in the Vatican</p>
        </li>
        <li>
          <p>2012 - 2013</p>
          <p>
            VP for business development for Rafisacos SA de CV, a manufacturing
            plant located in Yucatan
          </p>
        </li>
        <li>
          <p>2013 - 2014</p>
          <p>
            Started a telecommunications related company in LA called Talkmex
            California, to allow immigrants to buy air time (cell phone data)
            for their relatives back in their home countries.
          </p>
        </li>
        <li>
          <p>2014 - 2016</p>
          <p>
            Started a cunsumer software business to allow people to recommend
            personal service providers to their network. Akin to angies list or
            task rabbit, or a less impersonal version of yelp
          </p>
        </li>
        <li>
          <p>2016 - present</p>
          <p>
            Started exploring opportunities in the electrical industry. A big
            reform in Mexico made by the las administration allowed private
            companies to enter the market and engage in activities like
            producing and selling energy. This efforts culminated with the
            creation of Energia Omega, a company I currently own and has been
            involven in a project to remake the main energy distribution network
            of a big industrial company in the region dedicated to mining.
          </p>
        </li>
      </ul>
      <p className="font-bold my-4">Languages</p>
      <ul className="list-disc my-2 ml-4">
        <li>Spanish: native</li>
        <li>English: native</li>
        <li>Italian: spoken, bit rusty</li>
      </ul>
      <p className="font-bold my-4">Programming experience</p>
      <p>
        All my programming experience comes from projects done for fun or to
        explore ideas
      </p>
      <p>The following are the libraries or frameworks I&apos;ve worked on:</p>
      <ul className="list-disc my-2 ml-4">
        <li>React, Nextjs for the frontend</li>
        <li>Node, express for the backend api</li>
        <li>MongoDB, mongoose as a database</li>
        <li>
          Web3 is all done in solidity to develop on top of EVM compatible
          chains, with Hardhat as the development framework and ethers as the
          library to interface with the blockchain
        </li>
        <li>
          Deployment for the backend is done in Heroku, and Vercel for the
          frontend since I've been using NextJS
        </li>
      </ul>
    </div>
  );
};

export default CV;
