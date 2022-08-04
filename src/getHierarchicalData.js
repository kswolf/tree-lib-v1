function getHierarchicalData() {
    var data = {
        "id": 1,
        "name": "Animals",
        "type": "Root",
        "description": "A living organism that feeds on organic matter",
        "children": [
            {
                "id": 2,
                "name": "Carnivores",
                "type": "Type",
                "description": "Diet consists solely of animal materials",
                "children": [
                    {
                        "id": 3,
                        "name": "Felidae",
                        "type": "Family",
                        "description": "Also known as cats",
                        "children": [
                            {
                                "id": 4,
                                "name": "Siamese Cat",
                                "type": "Organism",
                                "description": "A breed of Asian cat. it has white fur",
                                "children": []
                            },
                            {
                                "id": 5,
                                "name": "Javanese Cat",
                                "type": "Organism",
                                "description": "Domestic breed of cats, of oriental origin",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "name": "Ursidae",
                        "type": "Family",
                        "description": "Also known as bears",
                        "children": [
                            {
                                "id": 7,
                                "name": "Polar Bear",
                                "type": "Organism",
                                "description": "White bear native to the Arctic Circle",
                                "children": []
                            },
                            {
                                "id": 8,
                                "name": "Panda Bear",
                                "type": "Organism",
                                "description": "Spotted bear native to South Central China",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "name": "Canidae",
                        "type": "Family",
                        "description": "Also known as dogs",
                        "children": [
                            {
                                "id": 10,
                                "name": "Labradore Retriever",
                                "type": "Organism",
                                "description": "One of the most popular dog breeds in Canada, UK and USA",
                                "children": []
                            },
                            {
                                "id": 11,
                                "name": "Golden Retriever",
                                "type": "Organism",
                                "description": "Generally friendly, loyal and intelligent breed of dogs",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 12,
                "name": "Herbivores",
                "type": "Type",
                "description": "Diet consists solely of plant matter",
                "children": [
                    {
                        "id": 13,
                        "name": "Bovidae",
                        "type": "Family",
                        "description": "Also known as cattle or cows",
                        "children": [
                            {
                                "id": 14,
                                "name": "Angus Cattle",
                                "type": "Organism",
                                "description": "Scottish breed of black cattle",
                                "children": []
                            },
                            {
                                "id": 15,
                                "name": "Holstein Friesian Cattle",
                                "type": "Organism",
                                "description": "Known as the highest-production dairy animals",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": 16,
                        "name": "Equidae",
                        "type": "Family",
                        "description": "Also known as horses",
                        "children": [
                            {
                                "id": 17,
                                "name": "Barb Horse",
                                "type": "Organism",
                                "description": "A breed of Northern African horses with high stamina and hardiness. Their generally hot temperament makes it harder to tame.",
                                "children": []
                            },
                            {
                                "id": 18,
                                "name": "Holsteiner Horse",
                                "type": "Organism",
                                "description": "One of the oldest of warmblood breeds, tracing back to the 13th century. Originates from Germany",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": 19,
                        "name": "Leporidae",
                        "type": "Family",
                        "description": "Also known as rabbits",
                        "children": [
                            {
                                "id": 20,
                                "name": "Lionhead rabbit",
                                "type": "Organism",
                                "description": "Unusual rabbit with a wool mane circling it's head, similar to a lion, hence it's name.",
                                "children": []
                            },
                            {
                                "id": 21,
                                "name": "Silver Fox Rabbit",
                                "type": "Organism",
                                "description": "Bred for their meat and unique fur.",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return data;
}

export default getHierarchicalData;