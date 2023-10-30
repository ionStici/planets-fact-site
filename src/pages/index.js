import path from "path";
import fs from "fs/promises";

import Header from "@/components/header";

export default function Home(props) {
    const { data } = props;
    const planetNames = data.map((planets) => planets.name);

    return (
        <>
            <Header planetNames={planetNames} />
            <div></div>
        </>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "public/data", "data.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: { data },
    };
}
