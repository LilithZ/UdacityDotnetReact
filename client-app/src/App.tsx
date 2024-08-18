import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {
  const [activities, setActivities] = useState([]); // this is a hook to keep track of the states of the app and remembering which activities have already been fetched. 'activities' is the stateful variable and 'setActivities' the function that keeps it updated. 
  useEffect(() => { // 'useEffect' is a hook that gets triggered when the 'App()' component is getting loaded. I am making a request to the backend api to be able to show the data in the app.
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, []) // the '[]' stands for the 'deps'(dependencies) and makes sure that the 'useEffect()' hook is only called once. TODO: change it when you want to call the backend more than once. Extra info: this hook actually gets triggered twice locally due to "StrictMode" in main.tsx, see https://react.dev/reference/react/useEffect#caveats
  return (
    <div>
      <Header as= 'h2' icon='users' content ='Reactivities'/>
      <List>
        {activities.map((activity: any) => (
          <List.Item key={(activity.id)}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>

  )
}

export default App
