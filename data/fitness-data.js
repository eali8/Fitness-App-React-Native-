

export function getAllFitness() {
    return FITNESSDATA;
  }
  
  export function getFitnessById(id) {
    if(id) {
      return FITNESSDATA.find((item) => item.id === id);
    }
    // if no id is provided, return the entire array 
   else {
    return FITNESSDATA; 
   }
  }
  
  // I followed the structure we completed in class 
  export const FITNESSDATA = [
    {
      id: '001',
      name: 'Cardio with Nina',
      active: true,
      keyImage: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      otherImage: [
        'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
        'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        'https://images.pexels.com/photos/1865131/pexels-photo-1865131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        'https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      ],
      shortDesc: '  Burn calories and improve your cardiovascular health.',
      longDesc:
      '  Engaging in activities that burn calories, such as jogging, cycling, or swimming, helps elevate your heart rate. This sustained increase in heart rate is crucial for improving cardiovascular health as it strengthens the heart muscle and enhances its efficiency.\n\n  Burning calories plays a pivotal role in weight management. Regular exercise not only helps in shedding excess pounds but also contributes to maintaining a healthy weight. This, in turn, reduces the risk of various cardiovascular conditions associated with obesity.',
      amenities: [
        { key: 0, value: 'Cardiovascular workouts' },
        { key: 1, value: 'Calorie burning sessions' },
        { key: 2, value: 'Heart-healthy exercises' },
        { key: 3, value: 'Professional trainers available' },
        { key: 4, value: 'Personalized fitness plans' },
        { key: 5, value: 'Find your bestself!' },
      ],
      duration: 30, 
      intensity: 'Medium', 
    },
    {id: '002', name: 'Strenght Training with Alex', active: false, keyImage:'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', shortDesc: 'Cras in turpis tincidunt, dictum justo non, cursus mi.'},
    {id: '003', name: 'Hot Yoga with Mike', active: false, keyImage:'https://randomuser.me/api/portraits/men/36.jpg', shortDesc: 'Fusce ornare tellus vel lobortis cursus.'},
    {id: '004', name: 'Pilates with Richard', active: false, keyImage:'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', shortDesc: 'Etiam arcu leo, blandit maximus dolor id, tincidunt ornare sem.'},
    {id: '005', name: 'Meditation with Ela', active: false, keyImage:'https://images.pexels.com/photos/1117493/pexels-photo-1117493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', shortDesc: 'Nunc sagittis gravida nunc, sit amet rhoncus ex mattis non.'},
    {id: '006', name: 'Manifestation with Tom', active: false, keyImage:'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg', shortDesc: 'Cras egestas neque vel dolor malesuada molestie.'},
    {id: '007', name: 'Fat Burning Yoga with Lili', active: false, keyImage:'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', shortDesc: 'Nullam urna arcu, dapibus finibus mi ut, tincidunt tincidunt nisi.'},
    {id: '008', name: 'Asana with Sora', active: false, keyImage:'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11', shortDesc: 'Vivamus bibendum mollis fringilla.'},
    {id: '009', name: 'Boxing with Farshid', active: false, keyImage:'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', shortDesc: 'Vivamus nibh nunc, rutrum sed dictum a, tempor eu diam.'},
    {id: '010', name: 'Power Yoga with Sasha', active: false, keyImage:'https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', shortDesc: 'Mauris commodo varius nibh eget fringilla.'},
];
   
  