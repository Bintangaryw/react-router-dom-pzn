import { useParams } from "react-router";

export default function ProductDetail() {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h1>Product Detail {params.id}</h1>
            <p>Product Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, rem?</p>
        </div>
    );
}
