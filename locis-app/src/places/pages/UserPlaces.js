import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'
const DUMMY_PLACES = [
  { id:'p1',
    title:'Empire State Building',
    desciprtion:'One of the most skyscapers in the world.',
    imageUrl:'https://media.timeout.com/images/101705309/630/472/image.jpg',
    address:'20 W 34th St, New York, NY 10001, USA',
    location:{
      lat:40.748817,
      lng:-73.985428
    },
    creator:'u1'
  },
  { id:'p2',
    title:'The Colosseum: A Grand Amphitheater',
    desciprtion:'Measuring some 620 by 513 feet (190 by 155 meters), the Colosseum was the largest amphitheater in the Roman world.',
    imageUrl:'https://dotravel.com/uploads/articles/4/visting-closseum-history-head.jpg',
    address:'Piazza del Colosseo, 1, 00184 Rome RM, Italy',
    location:{
      lat:41.890251,
      lng:12.492373
    },
    creator:'u2'
  }
]
const UserPlaces = () => {


  const {userId}  = useParams()
  console.log(userId)
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  console.log(loadedPlaces)
  return <PlaceList items={loadedPlaces} />
}
export default UserPlaces
