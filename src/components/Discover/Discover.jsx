import { RiApps2Line } from "react-icons/ri";
function Discover() {
  const tabItems = [
    { id: 1, icon: <RiApps2Line />, title: "Developer" },
    // { id: 2, icon: uiDisgner, title: "UI Designer" },
    // { id: 3, icon: pManager, title: "Project Manager" },
    // { id: 4, icon: disgner, title: "Accountant" },
    // { id: 5, icon: Accountant, title: "Human Resource" },
    // { id: 6, icon: hResource, title: "Marketing" },
  ];
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-xl md:text-2xl">
          Discover the Emerging Masters
        </h2>
        <p className="text-slate-700">
          Find the best master for your company and boosts your business 10x!
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 pb-2 border-b">
        {tabItems.map((tItem) => {
          return (
            <div className="flex items" key={tItem.id}>
              <div className="flex items-center gap-1">
                <div>{tItem.icon}</div>
                <div>
                  <p>{tItem.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Discover;
