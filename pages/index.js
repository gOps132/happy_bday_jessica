import Image from "next/image";
import Head from 'next/head';
import dynamic from 'next/dynamic';

import React, { useState, useEffect } from "react";

import debug_ from '../components/debug_helper';

import image_styles from "../styles/Image.module.css";
import home_styles from "../styles/Home.module.css";
import common_styles from "../styles/Common.module.css";

import Loader from "../components/loader";

const Profile = dynamic(() => import(`../components/home/dyn_images`),
	{ loading: () => <Loader/>}
);

const date_of_birth = new Date("03/02/2001");
const month_diff = (Date.now() - date_of_birth.getTime());

var age_dt = new Date(month_diff); 
//extract year from date    
var year = age_dt.getUTCFullYear();
//now calculate the age of the user
var v_age = Math.abs(year - 1970);

let get_date_ordinal = (d) => {
	if (d > 3 && d < 21) return 'th';
		switch (d % 10) {
		  case 1:  return "st";
		  case 2:  return "nd";
		  case 3:  return "rd";
		  default: return "th";
	}
}

export default function Home({m_posts}) {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className={common_styles.main_div}>
				<h1>HAPPY BIRTHDAY {v_age + get_date_ordinal(v_age)} Jessica!</h1>
				<div className={home_styles.main_profile}>
					<div className={image_styles.image_border_circle}>
						<Profile />
					</div>
				</div>
				<h3>Sorry im soo skiew in making this</h3>
				<h3>You are now {v_age} years old and counting</h3>
				<h3>Yes, this website counts your age</h3>
				<br/>
				<h3>DIED</h3>
				<h3>03/02/2001 - HOPEFULLY NOT SOON</h3>
				<h3>P.S. You still suck at Destiny 2 so 1v1 me bish</h3>
				<h3>Oh my fucking god, if geralt's actor is getting recast i will fucking rip my dick out and shove it in that new guys mouth omfg why did they have to do this shit</h3>
				<h3>You've been a good friend to me - Gian</h3>
			</div>
		</>	
	)
}
