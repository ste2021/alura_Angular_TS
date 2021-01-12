import { Component, Input } from '@angular/core';

@Component ({
    templateUrl: './vmessages.component.html'
})

export class VMessagesComponent {
    @Input() 
    text = '';
}