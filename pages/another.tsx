import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'

import styles from '@/pages/index.module.css'

export default function Another() {
  console.log("hi there");

  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}