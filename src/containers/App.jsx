import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import useGetData from "../hooks/useGetData";

const App = () => {
	const data = useGetData();
	console.log(data);
	return data.length === 0 ? (
		<h1>Cargando...</h1>
	) : (
		<Main>
			<Sidebar>
				<About
					avatar={data.avatar}
					name={data.name}
					profession={data.profession}
					bio={data.bio}
					address={data.address}
					social={data.social}
				/>
			</Sidebar>
			<Info>
				<Experience data={data.experience} />
				<Education data={data.education} />
				<Certificates data={data.certificate} />
				<Skills data={data.skills} />
			</Info>
		</Main>
	);
};

export default App;
