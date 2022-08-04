

const App = () => {
  const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ];

  return (
    <div className='App'>

      <Gallery photos={photos} />;
    </div>
  );
};

export default App;