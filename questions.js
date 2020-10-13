//array of trivia questions
const questions = [
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Ulna',
        b: 'Radius',
        c: 'Patella',
        d: 'Coccyx'
      },
      correctAns: 'Radius',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Full_Anterior_View_of_Right_Radius.png/220px-Full_Anterior_View_of_Right_Radius.png'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Fibula',
        b: 'Radius',
        c: 'Humerus',
        d: 'Tibia'
      },
      correctAns: 'Tibia',
      photo: 'https://sites.google.com/site/skeletalsystemport/_/rsrc/1418767126751/tibia/tibia.jpg'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Radius',
        b: 'Ulna',
        c: 'Femur',
        d: 'Humerus'
       },
      correctAns: 'Ulna',
      photo: 'https://cdn3.volusion.com/nqpvm.detql/v/vspfiles/photos/A45-2-2.jpg?v-cache=1594737065'
    },
    {
      question: 'What bones are pictured?',
      answers: {
        a: 'Metatarsals',
        b: 'Phalanges',
        c: 'Carpals',
        d: 'Metacarpals'
      },
      correctAns: 'Metacarpals',
      photo: 'https://www.orthopaedicsone.com/download/attachments/32179851/worddav33c4f7c8010ff76d06fd64265d010922.png?version=1&modificationDate=1270172536000'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Clavicle',
        b: 'Scapula',
        c: 'Deltoid',
        d: 'Sternum'
      },
      correctAns: 'Scapula',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/61iHK48Yn7L._SL1200_.jpg'
    },
    {
        question: 'What bone is pictured?',
        answers: {
          a: 'Clavicle',
          b: 'Scapula',
          c: 'Humerus',
          d: 'Femur'
        },
        correctAns: 'Femur',
        photo: 'https://www.osteoporosisinstitute.org/wp-content/uploads/i02-Femurs.jpg'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Rib',
        b: 'Radius',
        c: 'Fibula',
        d: 'Carpal'
      },
      correctAns: 'Rib',
      photo: 'https://cdn.shopify.com/s/files/1/1467/6660/products/Real-Human-Rib-_Single_--Main__SHN-18__1.jpg?v=1534882062'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Sternum',
        b: 'Tarsal',
        c: 'Carpal',
        d: 'Patella'
      },
      correctAns: 'Patella',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/41WlaUQp7gL._SX342_.jpg'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Sternum',
        b: 'Cervix',
        c: 'Sacrum',
        d: 'Scapula'
      },
      correctAns: 'Scapula',
      photo: 'https://i.imgur.com/s2hXx9V.jpg'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Sternum',
        b: 'Fibula',
        c: 'Clavicle',
        d: 'Ulna'
      },
      correctAns: 'Clavicle',
      photo: 'https://cdn.shopify.com/s/files/1/1467/6660/products/HumanClavicle--Main__SHN-01__1.jpg?v=1534882329'
    },
    {
      question: 'What muscle is pictured?',
      answers: {
        a: 'Sartorius',
        b: 'Soleus',
        c: 'Quadricep',
        d: 'Biceps femoris'
      },
      correctAns: 'Sartorius',
      photo: 'https://i.imgur.com/sER0dez.png'
    },
    {
      question: 'What muscle is pictured?',
      answers: {
        a: 'Shinus',
        b: 'Tibialis anterior',
        c: 'Rectus femoris',
        d: 'Soleus'
      },
      correctAns: 'Tibialis anterior',
      photo: 'https://i.imgur.com/HCO9UA2.png'
    },
    {
      question: 'What muscle is pictured?',
      answers: {
        a: 'Triceps',
        b: 'Deltoid',
        c: 'Biceps brachii',
        d: 'Soleus'
      },
      correctAns: 'Biceps brachii',
      photo: 'https://i.imgur.com/oOi7HcU.png'
    },
    {  
      question: 'What muscle is pictured?',
      answers: {
        a: 'Sartorius',
        b: 'Dorsi',
        c: 'Obliques',
        d: 'Abdominous rectus'
      },
      correctAns: 'Abdominous rectus',
      photo: 'https://i.imgur.com/PUHoZKI.png'
    },
    {  
      question: 'What muscle is pictured?',
      answers: {
        a: 'Deltoid',
        b: 'Trapezius',
        c: 'Obliques',
        d: 'Pectoralis'
      },
      correctAns: 'Deltoid',
      photo: 'https://i.imgur.com/Sc5Bm8G.png'
    },
    {  
      question: 'What bones are pictured?',
      answers: {
        a: 'Carpals',
        b: 'Phalanges',
        c: 'Tarsals',
        d: 'Metatarsals'
      },
      correctAns: 'Tarsals',
      photo: 'https://nursinglecture.com/wp-content/uploads/2019/06/Tarsals.png'
    },
    {  
      question: 'What muscle is pictured?',
      answers: {
        a: 'Dorsal',
        b: 'Latissimus',
        c: 'Deltoid',
        d: 'Trapezius'
      },
      correctAns: 'Trapezius',
      photo: 'https://d1s2fu91rxnpt4.cloudfront.net/mainsite/m20171204234513/display/Screen%2520Shot%25202017-12-04%2520at%25203.40.10%2520PM.png'
    },
    {  
      question: 'What muscle group is pictured?',
      answers: {
        a: 'Illiopsoas',
        b: 'Hamstrings',
        c: 'Ishcial',
        d: 'Pelvis dorsi'
      },
      correctAns: 'Illiopsoas',
      photo:'https://i.imgur.com/ocC9RGW.png'
    },
  ]