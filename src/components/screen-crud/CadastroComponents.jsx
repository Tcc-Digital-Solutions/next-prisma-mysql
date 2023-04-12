import '../../assets/css/css-crud/componentsCadastro.css'
import { ChangeEvent, useState } from 'react';
import Select from 'react-select'
import MultipleValueTextInput from 'react-multivalue-text-input';

export const CadastroComponents= (props) => {
    const [file, setFile] = useState({})

    const handleFileChange = (e) => {
        console.log(e)
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
    

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    
    const options2 = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }

      ]

    return (
        <div className="components-cadastro-div" >
            <form action="" className="components-cadastro-form">
                <span className="components-cadastro-span">
                    <span className='components-span-center'>
                    <p>Nome do produto</p>
                    <input type="text" className='inputMult' name="produtoname" required />
                    </span>
                    <span className='components-span-center'>
                        <p>Categoria do produto</p>
                        <Select name="categoriaproduto" required
                        isClearable={true}
                        isSearchable={true}
                        options={options} /> 
                    </span>
                    <span className='components-span-center'>
                        <p>Sub categoria do produto</p>
                        <Select name="subcategoriaproduto" required
                        isClearable={true}
                        isSearchable={true}
                        options={options} /> 
                    </span>
                    <span className='components-span-center'>
                        <p className='box-manual-text'>Links de vídeos sobre o produto</p>
                        <MultipleValueTextInput className='inputMult' name="linkvideos" required/> 
                    </span>
                    <span className='components-span-center'>
                        <p>Conteúdo da Embalagem</p>
                        <MultipleValueTextInput className='inputMult' name="conteudoembalagem" required/> 
                    </span>
                    <span className='components-span-center'>
                        <p>Imagem 360°</p>
                        <input type="text" className='inputMult' name="img360" required/>
                    </span>
                    <span className='components-span-center'>
                        <p>Imagens da montagem do produto</p>
                        <input className="button-65" id='imgUpload' type="file" onChange={handleFileChange} name="imgmontagem" required/>
                    </span>
                    <span className='components-span-center'>
                        <p>PDF  do produto</p>
                        <input className="button-65" id='imgPdf' type="file" onChange={handleFileChange} name="pdfproduto" required/>
                    </span>
                    <span className='components-span-center-button'>
                        <button type='submit' className='cadastro-user-form-button'>Cadastrar</button>
                    </span>
                    <span className='components-span-center'>

                    </span>
                </span>        
            </form>
        </div>
    )
}