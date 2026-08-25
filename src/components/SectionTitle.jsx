export default function SectionTitle({kicker,title,intro}){return <div className="section-title reveal"><span className="kicker">{kicker}</span><h2>{title}</h2>{intro&&<p>{intro}</p>}</div>}
