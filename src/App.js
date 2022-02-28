import React, { useState } from 'react';
import { Button } from './components/Button';

export default function App() {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    return (
        <div style={{ width: '800px', margin: 'auto' }}>

            <h1 style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '4em' }}>{count}</h1>

            <div style={{ margin: '20px', display: 'flex' }}>
                <Button 
                    disabled={disabled} 
                    onClick={() => 
                    setCount(count + 1)}>
                    Incrementar
                </Button>
                <Button 
                    color="secondary" 
                    disabled={disabled} 
                    onClick={() => setCount(count - 1)}>
                    Decrementar
                </Button>
            </div>

            <div style={{ margin: '20px' }}>
                <Button color="secondary" 
                    icon="refresh" 
                    disabled={disabled} 
                    onClick={() => setCount(0)}>
                    Resetar
                </Button>
            </div>

            <div style={{ margin: '20px' }}>
                <Button 
                    icon="check" 
                    disabled={disabled} 
                    onClick={() => setDisabled(true)}>
                    Finalizar
                </Button>
            </div>

            <div style={{ margin: '20px' }}>
                <Button 
                    onClick={() => setDisabled(false)}>
                    Retomar
                </Button>
            </div>

        </div>
    );
}
