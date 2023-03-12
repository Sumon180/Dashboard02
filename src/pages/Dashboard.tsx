import { useSelector } from "react-redux";
import { toggleDarkMode } from "../app/darkModeSlice";

const Dashboard = () => {
  const mode = useSelector(toggleDarkMode);

  return (
    <>
      <div
        className={`${
          mode ? "bg-black text-slate-300" : "bg-white text-slate-800"
        }`}
      >
        <div className="relative mx-5 mt-[4.65rem]">
          <div className="pt-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              eaque maxime sed unde nihil ea, deleniti quibusdam quos dolore
              magni impedit obcaecati at, aliquam nisi laudantium cum adipisci
              quam repellendus a culpa corporis maiores atque ipsum. Dolor
              reiciendis maxime nobis nesciunt illum molestiae laudantium iure
              magnam error officia inventore autem neque, minus ex corrupti fuga
              excepturi quo. Incidunt vitae accusamus cumque maxime ea
              reprehenderit, nobis libero quas ab nam. Est sint, dicta
              consequatur ipsa fuga magnam corrupti reprehenderit reiciendis
              deleniti provident, omnis soluta aspernatur hic laudantium
              laboriosam vel! Eveniet vero, omnis libero consectetur, quam velit
              doloremque commodi, aperiam eaque laboriosam ipsum. Totam, nisi
              vero. Dicta ratione sit earum sed libero obcaecati placeat fugiat
              doloremque blanditiis autem, asperiores, enim numquam. Maxime odio
              quo necessitatibus doloribus temporibus. Expedita iure natus
              provident minus in molestiae. Minima neque perferendis repudiandae
              ab incidunt ipsum vero consectetur et quas autem corrupti commodi,
              atque sed cupiditate quasi quam voluptatibus saepe accusamus est
              mollitia iusto. Debitis iste aliquid ea fuga natus? Cum deserunt
              nesciunt, recusandae nulla aliquid perspiciatis eius praesentium?
              Non, unde illo. Doloribus recusandae numquam maiores libero totam?
              Eveniet, eum, quibusdam voluptatibus ab, natus omnis sed illo
              veritatis exercitationem cum aspernatur sapiente fugit nulla
              delectus voluptates molestiae.
            </p>
            <ul>
              <li>01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
              <li>05</li>
              <li>06</li>
              <li>07</li>
              <li>08</li>
              <li>09</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              blanditiis, asperiores natus distinctio cumque eveniet minima
              nesciunt maxime quam repellat nostrum iusto itaque accusamus est
              at eos saepe ducimus velit perferendis officia nisi impedit
              dolores debitis. Possimus, illo dolor explicabo id, in assumenda
              numquam fuga quaerat officia facere blanditiis. Quod enim minus
              optio. Voluptatum porro quia molestiae quod possimus numquam
              repellendus facere eveniet aliquid voluptatibus non dolorem
              soluta, ex deserunt neque hic ducimus et est optio fuga. Culpa
              earum sint illo similique vel dolorum. Beatae praesentium
              blanditiis error quaerat illum eius sit quo voluptatum quod nisi
              itaque, expedita nulla facilis, corrupti cupiditate temporibus
              veritatis! Ipsa nesciunt architecto aliquam consequuntur
              accusantium unde provident tempore! Nihil ratione inventore fugit
              sunt tempora, ea quo accusamus accusantium commodi nostrum quia,
              sed velit autem id ipsa ullam porro corporis sint saepe
              repudiandae deserunt ab! Quas ducimus quibusdam ut repudiandae
              dolor reprehenderit, sit reiciendis! Quidem, modi? A magni
              sapiente debitis, eum perferendis, rerum odit fugit quo, molestiae
              fugiat illum? Quasi, est, corrupti possimus molestiae fuga dolor
              ex reiciendis veritatis obcaecati consequuntur nihil voluptatum
              nostrum, eveniet dolorum animi. Ea quibusdam ipsa perspiciatis
              fugiat id ullam, animi fuga, hic, maiores tempore nemo molestias
              corrupti praesentium illo quia repellendus!
            </p>
            <ul>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              reprehenderit excepturi aliquid quaerat, nisi modi suscipit
              consequatur optio quo dolores, nesciunt illum ad possimus, sequi
              soluta aspernatur eveniet odio asperiores incidunt fugit
              recusandae consectetur et obcaecati earum. Labore et minima
              excepturi molestiae, totam incidunt quam quo dolore modi veritatis
              soluta rem optio maxime asperiores libero natus consectetur enim,
              minus sit exercitationem unde assumenda tempora. Suscipit deserunt
              pariatur nemo dolore, voluptates consectetur, natus explicabo
              laborum distinctio sint voluptas nisi porro quibusdam dignissimos
              vero consequatur veniam ipsam. Vel quis quae illo quam omnis
              maxime nam. Dolore, laborum excepturi corrupti provident odio
              obcaecati aliquam nobis voluptates dolorem cupiditate maxime
              beatae! Reprehenderit tenetur, autem a nisi nihil ipsum
              consequuntur necessitatibus voluptate aliquid ducimus dolor animi
              dolorem nesciunt dolorum veritatis nulla, praesentium ad unde
              maxime fugit dicta! Labore similique necessitatibus sunt
              repudiandae at dignissimos aut atque distinctio, possimus impedit
              cum nisi quas dolores accusantium sit unde voluptatum nobis quos
              vitae repellat perferendis! Iusto quae neque sint nesciunt,
              sapiente sequi laudantium dolores eaque, facere laboriosam, eius
              amet voluptates. Incidunt quae repellat accusantium earum
              expedita, temporibus sint officia officiis, omnis magni soluta.
              Necessitatibus dolore velit aut accusamus exercitationem. Fuga ad
              a hic eveniet dicta perferendis quasi non quidem delectus,
              deserunt commodi nihil molestiae officia sunt dignissimos esse
              quam, maiores laborum voluptatibus corrupti aperiam animi
              aspernatur sint? Voluptatum fugit veritatis aliquid rem autem.
              Facilis, sit! Ipsam eos sunt veniam ea a eum nobis eaque, eius
              autem quisquam iure qui cum, soluta illum rerum, veritatis maxime
              non magni? Debitis, laudantium illo aperiam voluptates possimus
              illum temporibus, atque, numquam suscipit deleniti cum. Tempora ex
              unde sunt voluptatem quas nihil quo atque est! Et facilis quam
              itaque, quo consequatur quis quas, libero dolorem nisi
              necessitatibus iure voluptatibus minima aut non nesciunt esse
              similique iste sunt repellat porro? Numquam reprehenderit aperiam
              earum optio voluptates facere cupiditate expedita tempora,
              consequatur vel deleniti aspernatur nesciunt eveniet accusamus
              dolor rem assumenda qui eligendi? Nostrum perspiciatis placeat
              dolorum officiis molestiae! In rerum provident labore sit hic
              dolores fuga? Voluptatibus sunt, nesciunt provident iure nihil
              natus doloremque ullam! Doloremque consequatur, nostrum error
              accusamus sequi quae cupiditate optio. Illum autem animi
              perspiciatis dolore officiis reiciendis optio. Non quia illo
              dolores deleniti, quibusdam harum dolorum nulla eum perspiciatis
              quidem blanditiis explicabo dignissimos exercitationem temporibus
              dolorem ipsum enim provident minus optio porro. Velit a iusto
              ipsum fugiat eius nulla soluta nam similique quis veritatis quasi
              voluptas, expedita itaque sapiente corporis!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
