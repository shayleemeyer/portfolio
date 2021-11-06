import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ashly Pinarkyil",
      title: "Pricing Analyst at Medidata Solutions",
      img:
        "assets.nosync/ashlyp.png",
      icon: "assets.nosync/ashlyp.png",
      desc:
        "Shaylee is a very hardworking individual. Working aside her during my summer internship at Federal Mogul Motorparts was an incredible experience. She is very motivated and organized individual that brings innovation and out of the box ideas to modern day problems. I have never worked with someone with such vast experiences. Shaylee is continually learning and strengthening her skills. It has been a pleasure working with her and being her colleague.",
        link: "https://www.linkedin.com/in/ashlypinarkyil/",
      
    },
    {
      id: 2,
      name: "Shane Mann",
      title: "Alternative Investments Accountant",
      img:
        "assets.nosync/shane.jpg",
      icon: "assets.nosync/twitter.png",
      desc:
        "Shaylee Meyer thrives in both individual and team environments. I was grateful to work with her in co-dependent departments at DRiV Inc. She possesses extreme attention to detail and invaluable communication skills. Though engineering was a foreign subject to me, Shaylee was able to communicate the impact and direction of projects she worked on, which is a transferrable and useful skill to any business. Shaylee has helped me develop as a professional in countless ways. I specifically recall her taking the time to listen and provide constructive feedback on a presentation I later gave to upper management at DRiV. She will be a leader in any role she pursues.",
        link: "https://www.linkedin.com/in/shane-mann61/",
      featured: true,
    },
    {
      id: 3,
      name: "Tombe Mogga",
      title: "Corporate PR Representative at UPS",
      img:
        "assets.nosync/tombe.png",
      icon: "assets.nosync/tombe.png",
      desc:
        "In life, there are few people an Individual meets that boasts all the greatness being a human expresses. Shaylee is the exact expression of this ideology; Greatness. As Archimedes said: Give me a lever long enough, and a place to stand, and I will move the earth. Shaylee will move the earth with whatever she creates.",
      link: "https://www.linkedin.com/in/tombe-mogga-837129b5/",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>References</h1>
      <div className="container">
        
        {data.map((d) => (
          
          <div className={d.featured ? "card featured" : "card"}>
            <a href={d.link} target="_blank" rel="noreferrer">
            <div className="top">
            
              <img
                className="user"
                src={d.img}
                alt=""
              />
            
            </div>
            </a>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
            <div className="center">
              {d.desc}
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
