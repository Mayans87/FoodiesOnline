import Card from '../UI/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const DUMMY_MEALS=[];



// const usableData = JSON.stringify(data);




const AvailableMeals = () => {
  const [isloading, setisloading]= useState(true);
  const [meals,setmeals]=useState([]);
  useEffect(() => {
    const mealfetchhandler = async ()=>{
      const response = await fetch('https://http-project-655d6-default-rtdb.firebaseio.com/meals.json');
      const data =  await response.json();
      for (const key in data) {
       DUMMY_MEALS.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
       })
      }
      setmeals(DUMMY_MEALS)
    
    }
    mealfetchhandler();
    setisloading(false)
    
      
    }, [])
  // console.log(usableData)
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (<>
    {!isloading?

    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>:
    <p style={{color:'white',textAlign:'center'}}>Loading...</p>}
    </>
  );
};

export default AvailableMeals;