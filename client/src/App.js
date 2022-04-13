import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Cancel from './pages/Cancel';
import Check from './pages/Check';
import Main from './pages/Main';
import Reserve from './pages/Reserve';

function App() {
  return (
    <main>
      <Container maxWidth="md" >
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/check" element={<Check />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </Router>
        <Box >
        </Box>
      </Container>
    </main>
  );
}

export default App;
