const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About The Symposium
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary/10 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">About College</h3>
            <p className="text-gray-300">
              Our institution stands as a beacon of technical excellence, fostering innovation and 
              nurturing future tech leaders. With state-of-the-art facilities and expert faculty, 
              we provide the perfect platform for students to excel in their chosen fields.
            </p>
          </div>
          
          <div className="bg-primary/10 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-secondary">About Department</h3>
            <p className="text-gray-300">
              The Department of Technology has been at the forefront of technical education, 
              consistently producing industry-ready professionals. Our focus on practical learning 
              and research has established us as a leading department in the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;