import {useSelector} from './hooks/useTypedSelector'
import {useActions} from './hooks/useActions'


import Button from './components/Button'
function App() {
  const {fetchBookings} = useActions();

console.log('yeee',fetchBookings())
  return (

    <div className="App">
      <Button primary = "primary">
      button
        </Button>
    </div>
  );
}

export default App;
