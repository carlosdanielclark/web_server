const { Router } = require('express'); 
const router = Router();

router.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Carlos D. Clarke Imbert',
    titulo: 'Study Node  '
  });
});

router.get('/generic', (req, res) => {
  res.render('generic', {
      nombre: 'Carlos D. Clarke Imbert',
      titulo: 'Curso de Node  '
  });
});

router.get('/elements', (req, res) => {
  res.render('elements', {
      nombre: 'Carlos D. Clarke Imbert',
      titulo: 'Curso de Node  '
  });
});

router.get('*', (req, res) => {
  res.render('404', {
    nombre: 'Carlos D. Clarke Imbert',
    titulo: 'Curso de Node  '
  });
});

module.exports = router;
