import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {useEffect} from 'react';
import { useAppSelector } from '../../../hooks/redux';
import {UiType} from "../../../store/ui/uiSlice"

export default function FlashBar() {
  const data:UiType=useAppSelector(state => state.uiSlice);
  const [state, setState] = React.useState<boolean>(!data.loading);

  const handleClose = () => {
    setState(false);
  };
  useEffect(() => {
    setTimeout(() =>handleClose(),3000)
  },[])


  return (
    <div>
    
      <Snackbar
        anchorOrigin={{ vertical:"top", horizontal:"center" }}
        open={state}
        onClose={handleClose}
        message={data.msg}
      
      />
    </div>
  );
}