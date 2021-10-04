import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Shane Mann",
      title: "Alternative Investments Accountant",
      img:
        "assets/shane.jpg",
      icon: "assets/twitter.png",
      desc:
        "Shaylee Meyer thrives in both individual and team environments. I was grateful to work with her in co-dependent departments at DRiV Inc. She possesses extreme attention to detail and invaluable communication skills. Though engineering was a foreign subject to me, Shaylee was able to communicate the impact and direction of projects she worked on, which is a transferrable and useful skill to any business. Shaylee has helped me develop as a professional in countless ways. I specifically recall her taking the time to listen and provide constructive feedback on a presentation I later gave to upper management at DRiV. She will be a leader in any role she pursues.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
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
