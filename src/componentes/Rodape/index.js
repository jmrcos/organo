import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='blank'>
                            <img src='./imagens/fb.png' alt='Logo do facebook'/>
                        </a>
                    </li>

                    <li>
                        <a href='twitter.com' target='blank'>
                            <img src='./imagens/tw.png' alt='Logo do twitter'/>
                        </a>
                    </li>

                    <li>
                        <a href='instagram.com' target='blank'>
                            <img src='./imagens/ig.png' alt='Logo do instagram'/>
                        </a>
                    </li>
                
                </ul>
            </section>

            <section>
                <img src='./imagens/logo.png' alt='Imagem da logo'/>
            </section>

            <section>
                <p>Desenvolvido por Alura</p>
            </section>
           
        </footer>
    )
}

export default Rodape