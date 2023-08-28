const MinicartItem = () => {
    return (
        <div className="mt-10 flex rounded-lg shadow-lg overflow-hidden">
            <div className="w-1/3 rounede">
                <img
                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cfe710d8-fab1-4c1c-b85a-8096099572e3/quest-5-road-running-shoes-VFHN0m.png"
                    alt=""
                    className="object-cover float-left"
                />
            </div>
            <div className="w-2/3 p-4">
                <p className="font-bold text-lg">Name</p>
                <p className="font-semibold">Price</p>
                <div className="flex space-x-3 ">
                    <button className="btn btn-ghost rounded-full">-</button>
                    <p className="my-auto font-semibold">0</p>
                    <button className="btn btn-ghost rounded-full">+</button>
                </div>
            </div>
        </div>
    );
};

export default MinicartItem;
