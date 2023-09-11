import { Container, Swapper, Header, DivItems, Item, Button, Quantify, UnitSelect, Category, SelectItens, Main, DivItem, Info, DivCategoryItem } from "./styles";

import { useState } from "react";

import { LuPlus, LuMoreVertical } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

import options from "../../data/options.jsx";

function Home() {
  const [items, setItems] = useState([]);

  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemUnit, setItemUnit] = useState("unit");
  const [itemCategory, setItemCategory] = useState(null);

  const [checkedItems, setCheckedItems] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const removeItem = (index) => {
    setSelectedItemIndex(index);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const onlyNumbers = (e) => {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const addItem = () => {
    if (itemName && itemQuantity && itemCategory) {
      if (!isNaN(itemQuantity)) {
        const quantity = parseFloat(itemQuantity);
  
        if (quantity !== 0) { 
          const unitText = quantity === 1 ? "unidade" : "unidades";
  
          const newItem = {
            name: itemName,
            quantity: quantity + " " + unitText,
            category: itemCategory,
          };
          setItems((prevItems) => [...prevItems, newItem]);
  
          setItemName("");
          setItemQuantity(1);
          setItemUnit("unit");
        } else {
          alert("A quantidade não pode ser igual a zero.");
        }
      } else {
        alert("A quantidade deve conter apenas números.");
      }
    }
  };
  

  return (
    <Container>
      <Swapper>
        <Header>
          <h1>Lista de Compras</h1>
          <DivItems>
            <Item>
              <label htmlFor="item">Item</label>
              <input
                type="text"
                id="item"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Item>

            <div className="divide">
              <Quantify>
                <label htmlFor="quantify">quantidade</label>
                <div className="quantifydiv">
                  <input
                    id="quantity"
                    value={itemQuantity}
                    onChange={(e) => setItemQuantity(e.target.value)}
                    onKeyDown={(e) => onlyNumbers(e)}
                    maxLength={3}
                  />
                  <UnitSelect
                    id="unit"
                    value={itemUnit}
                    onChange={(e) => setItemUnit(e.target.value)}
                  >
                    <option value="unit">Un.</option>
                    <option value="kg">Kg</option>
                    <option value="L">L</option>
                  </UnitSelect>
                </div>
              </Quantify>

              <Category>
                <label htmlFor="category">Categoria</label>
                <SelectItens
                  options={options}
                  placeholder="Selecione"
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: state.isFocused ? "none" : "none",
                      background: "none",
                      border: "none",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      background: "#111112",
                      border: "1px solid var(--base-gray-300, #252529)",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      color: state.isSelected ? "#fff" : "#afabb6",
                      background: state.isSelected
                        ? "var(--produto-purple, #252529)"
                        : state.isFocused
                        ? "var(--base-gray-500, #111112)"
                        : "#111112",
                    }),
                    singleValue: (provided, state) => ({
                      ...provided,
                      color: state.isSelected ? "#fff" : "#afabb6",
                    }),
                  }}
                  onChange={(selectedOption) => setItemCategory(selectedOption)}
                />
              </Category>

              <Button onClick={addItem}>
                <LuPlus size={24} color="#ffffff" />
              </Button>
            </div>
          </DivItems>
        </Header>

        <Main>
          {items.length === 0 ? (
            <div className="nothing">
              <span>Nenhum item adicionado.</span>
            </div>
          ) : (
            items.map((item, index) => (
              <DivItem key={index} done={checkedItems.includes(index)}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              >
                <Info done={checkedItems.includes(index)}>
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(index)}
                    onChange={() => {
                      if (checkedItems.includes(index)) {
                        setCheckedItems(
                          checkedItems.filter(
                            (itemIndex) => itemIndex !== index
                          )
                        );
                      } else {
                        setCheckedItems([...checkedItems, index]);
                      }
                    }}
                  />
                  <div>
                    <span>{item.name}</span>
                    <p>{item.quantity}</p>
                  </div>
                </Info>

                <DivCategoryItem>
                  <div
                    className="categoryItem"
                    style={{
                      background: item.category
                        ? item.category.color || "defaultColor"
                        : "defaultColor",
                    }}
                  >
                    {item.category ? (
                      <>
                        <span
                          className="categoryLabel"
                          style={{
                            color: item.category
                              ? item.category.colorlabel || "defaultColor"
                              : "defaultColor",
                          }}
                        >
                          {item.category.label}
                        </span>{" "}
                      </>
                    ) : (
                      "categoria"
                    )}
                  </div>
                  <button>
                    <LuMoreVertical
                      size={20}
                      color="#A881E6"
                      onClick={() => removeItem(index)}
                    />
                  </button>
                </DivCategoryItem>
              </DivItem>
            ))
          )}

          {showDeleteModal && (
            <div>
              <div className="modal-cover" onClick={closeDeleteModal}></div>
              <div className="modal">
                <div className="modal-content">
                  {selectedItemIndex !== null && (
                    <p>
                      Deseja excluir:{" "}
                      <span>{items[selectedItemIndex]?.name}?</span>{" "}
                    </p>
                  )}
                  <div className="modal-buttons">
                    <button
                      onClick={() => {
                        if (selectedItemIndex !== null) {
                          const updatedItems = items.filter(
                            (_, index) => index !== selectedItemIndex
                          );
                          setItems(updatedItems);
                          setSelectedItemIndex(null);
                          setShowDeleteModal(false);
                        }
                      }}
                    >
                      Excluir
                    </button>
                    <button className="btnabs" onClick={closeDeleteModal}>
                      <MdOutlineClose size={16} color="#fff" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Main>
      </Swapper>
    </Container>
  );
}

export default Home;
