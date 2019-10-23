import React from 'react';
import Contact from './Contact';

const contact = [
    {
        name: 'Fortnite Player',
        avatar: 'https://media.cdnws.com/_i/61411/3026/1399/26/stickers-fortnite-danse-bas-les-masques-ref13fortnite-stickers-muraux-fortnite-autocollant-deco-salon-chambre-sticker-mural-jeux-video-geek-2.jpeg',
        isConnected: true,
    },
     {
        name: 'Great Grey Wolf, Sif',
        avatar: 'https://i.imgur.com/ahcteGT.jpg',
        isConnected: false,
     },
     {
        name: 'Apex Legend',
        avatar: 'https://i.ytimg.com/vi/46nKt5LXbHo/maxresdefault.jpg',
        isConnected: true, 
     },
     {
        name: 'Ultra Instinct Shaggy',
        avatar: 'https://i.ytimg.com/vi/JgN_yXW39F0/hqdefault.jpg',
        isConnected: false, 
     },
     {
        name: 'Isaac',
        avatar: 'http://gamingway.fr/wp-content/uploads/2017/01/the_binding_of_isaac_afterbirth010.jpg',
        isConnected: false, 
     },
]

const ContactList = () => (
    <div>
      {contact.map(item => (
        <Contact name={item.name} avatar={item.avatar} isConnected={item.isConnected} />
      ))}
    </div>
  );
export default ContactList
