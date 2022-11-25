import React, { useState, useRef } from 'react'
import { imgIcon } from '../../../utils/constant'
import resizeFile from '../../../utils/resizeFile'
import { saveData } from '../../../utils/firebase'

const CreatePrestation = ({ isCreatePage }) => {

  const [imagePrev, setImagePrev] = useState(null)
  const [prestation, setPrestation] = useState({
    title: "",
    cardTitle: "",
    id: "",
    image: null,
    content: [
      {
        title: "",
        description: "",
        prestations: [
          {
            price: "",
            text: ""
          }
        ]
      }
    ]
  })

  const inputFile = useRef(null)
  // Simulation du click le file input \\
  const onCustomInputFileClick = () => {
    inputFile.current.click();
  };

  // IMAGE \\
  const onImageChange = async (event) => {
    // On compress l'image à 70%
    try {
      const file = event.target.files[0];
      const res = await resizeFile(file);
      setPrestation(old => ({ ...old, image: res })); // On sauvgarde l'image compressée
      setImagePrev(URL.createObjectURL(res)); // On créer un lien pour la preview de l'image
    } catch (err) {
      console.log(err);
    }
  };

  const addParagraph = () => {
    setPrestation(old => ({
      ...old, content: [...prestation.content, {
        title: "",
        description: "",
        prestations: [
          {
            price: "",
            text: ""
          }
        ]
      }]
    }))
  }

  const addPrestation = (paragraphID) => {
    const newParagraphs = prestation.content
    newParagraphs[paragraphID] = {
      ...newParagraphs[paragraphID],
      prestations: [...newParagraphs[paragraphID].prestations, {
        price: "",
        text: ""
      }]
    }
    setPrestation(old => ({ ...old, content: newParagraphs }))
  }

  // UPDATE START
  const upadatePrestationText = (paragraphID, prestationID, value) => {
    const newParagraphs = prestation.content
    newParagraphs[paragraphID].prestations[prestationID].text = value
    setPrestation(old => ({ ...old, content: newParagraphs }))
  }
  const upadatePrestationPrice = (paragraphID, prestationID, value) => {
    const newParagraphs = prestation.content
    newParagraphs[paragraphID].prestations[prestationID].price = value
    setPrestation(old => ({ ...old, content: newParagraphs }))
  }
  const upadateParagraphTitle = (paragraphID, value) => {
    const newParagraphs = prestation.content
    newParagraphs[paragraphID].title = value
    setPrestation(old => ({ ...old, content: newParagraphs }))
  }
  const upadateParagraphDescription = (paragraphID, value) => {
    const newParagraphs = prestation.content
    newParagraphs[paragraphID].description = value
    setPrestation(old => ({ ...old, content: newParagraphs }))
  }
  // UPDATE END

  const deleteParagraph = (paragraphID) => {
    const newParagraphs = prestation.content
    newParagraphs.splice(paragraphID, 1)
    setPrestation(old => ({ ...old, content: newParagraphs }))
  }

  const deletePrestation = (paragraphID, prestationID) => {
    const newParagraphs = prestation.content
    newParagraphs[paragraphID].prestations.splice(prestationID, 1)
    setPrestation(old => ({ ...old, content: newParagraphs }))
  }

  return (
    <section id="createPrestation">
      <header>
        <button className='back' onClick={() => isCreatePage(false)}>Retour</button>
        <button className='add' onClick={() => saveData(prestation)}>Sauvgarder</button>
      </header>
      <div className="createPrestation__container">
        <div className="left">
          <div className="imageBox">
            <input type="file" onChange={onImageChange} ref={inputFile} style={{ display: 'none' }} />
            <button className={` ${imagePrev == null && "border"}`} onClick={onCustomInputFileClick}>
              <img src={imgIcon} alt="" />
            </button>
            <div className="img-container ">
              <div className="image" style={{ backgroundImage: 'url(' + imagePrev + ')' }}></div>
            </div>
          </div>
          <input type="text" id='cardTitle' placeholder='Titre de la carte...' value={prestation.cardTitle} onChange={(e) => setPrestation(old => ({ ...old, cardTitle: e.target.value }))} />
        </div>
        <div className="right">
          <input type="text" id='title' placeholder='Titre de la prestation...' value={prestation.title} onChange={(e) => setPrestation(old => ({ ...old, title: e.target.value }))} />
          {
            prestation?.content?.map((paragraph, paragraphID) => (
              <div key={paragraphID} className="paragraph">
                <button className='delete' onClick={() => deleteParagraph(paragraphID)}>Supprimer le paragraph</button>
                <div className="info">
                  <input type="text" placeholder='Catégorie...' value={paragraph.title} onChange={(e) => upadateParagraphTitle(paragraphID, e.target.value)} />
                  <textarea type="text" placeholder='Description...' value={paragraph.description} onChange={(e) => upadateParagraphDescription(paragraphID, e.target.value)} />
                </div>

                <div className="new-presations">
                  {
                    paragraph?.prestations?.map((newPrestation, id) => (
                      <div className="new-prestation" key={id}>
                        <textarea type="text" placeholder='Text...' value={newPrestation.text} onChange={(e) => upadatePrestationText(paragraphID, id, e.target.value)} />
                        <input type="text" placeholder='Prix...' value={newPrestation.price} onChange={(e) => upadatePrestationPrice(paragraphID, id, e.target.value)} />
                        <button className='delete' onClick={() => deletePrestation(paragraphID, id)}>Supprimer la prestaion</button>
                      </div>
                    ))
                  }
                  <button className='add' onClick={() => addPrestation(paragraphID)}>Ajouter une prestation</button>
                </div>


              </div>
            ))
          }
          <button className='add' onClick={addParagraph}>Ajouter un paragraph</button>

        </div>
      </div>
    </section>
  )
}

export default CreatePrestation