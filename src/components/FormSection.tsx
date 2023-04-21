import React from 'react';
import { Accordion, 
    AccordionItem, 
    AccordionContent, 
    AccordionToggle } from '@patternfly/react-core';
import { FormPage } from './FormPage';

export const FormSection: React.FunctionComponent = () => {
        const [expanded, setExpanded] = React.useState('');
      
        const onToggle = (id: string) => {
          if (id === expanded) {
            setExpanded('');
          } else {
            setExpanded(id);
          }
        };

        return (
            <>
            <Accordion asDefinitionList>
              <AccordionItem>
                <AccordionToggle
                  onClick={() => {
                    onToggle('def-list-toggle1');
                  }}
                  isExpanded={expanded === 'def-list-toggle1'}
                  id="def-list-toggle1"
                >
                  Section one
                </AccordionToggle>
                <AccordionContent id="def-list-expand1" isHidden={expanded !== 'def-list-toggle1'}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </AccordionContent>
              </AccordionItem>
        
              <AccordionItem>
                <AccordionToggle
                  onClick={() => {
                    onToggle('def-list-toggle2');
                  }}
                  isExpanded={expanded === 'def-list-toggle2'}
                  id="def-list-toggle2"
                >
                  Section two
                </AccordionToggle>
                <AccordionContent id="def-list-expand2" isHidden={expanded !== 'def-list-toggle2'}>
                 <FormPage />
                </AccordionContent>
              </AccordionItem>
        
              <AccordionItem>
                <AccordionToggle
                  onClick={() => {
                    onToggle('def-list-toggle3');
                  }}
                  isExpanded={expanded === 'def-list-toggle3'}
                  id="def-list-toggle3"
                >
                  Section three
                </AccordionToggle>
                <AccordionContent id="def-list-expand3" isHidden={expanded !== 'def-list-toggle3'}>
                  <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
                </AccordionContent>
              </AccordionItem>
        
              <AccordionItem>
                <AccordionToggle
                  onClick={() => {
                    onToggle('def-list-toggle4');
                  }}
                  isExpanded={expanded === 'def-list-toggle4'}
                  id="def-list-toggle4"
                >
                  Section four
                </AccordionToggle>
                <AccordionContent id="def-list-expand4" isHidden={expanded !== 'def-list-toggle4'}>
                  <p>
                    Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
                    sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
                    tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
                    convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
                    dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
                  </p>
                </AccordionContent>
              </AccordionItem>
        
              <AccordionItem>
                <AccordionToggle
                  onClick={() => {
                    onToggle('def-list-toggle5');
                  }}
                  isExpanded={expanded === 'def-list-toggle5'}
                  id="def-list-toggle5"
                >
                  Section five
                </AccordionToggle>
                <AccordionContent id="def-list-expand5" isHidden={expanded !== 'def-list-toggle5'}>
                  <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </>
          ); 
        };
        
