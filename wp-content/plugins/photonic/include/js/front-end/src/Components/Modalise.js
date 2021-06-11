/**
 * ModaliseJS - Alexis Paques
 * Converted to ES6 by Sayontan Sinha
 * GPL v3.0
 */

/*
 * var myModal = Modalise('htmlID', options);
 *
 * id: The HTML id of the object
 * options:  options can modify the class name to which are bind the close, cancel and confirm functions, plus the buttons to open the modal.
	var options = {
	  "classClose": ".close",
	  "classCancel": ".cancel",
	  "classConfirm": ".confirm",
	"btnsOpen": [ HTMLelements ]
  }
 */
export class Modalise {
	constructor(id, options) {
		this.events = {
			onShow    : new Event('onShow'),
			onConfirm : new Event('onConfirm'),
			onHide    : new Event('onHide')
		};
		this.modal            = document.getElementById(id);
		this.classClose       = '.close';
		this.classCancel      = '.cancel';
		this.classConfirm     = '.confirm';
		this.btnsOpen         = [];
		this.utils            = {
			// extend: extend
		};
		this.callbacks = {};
	}

	/*
	 * Modalise.show() :
	 *
	 * Shows the modal
	 */
	show() {
		this.modal.dispatchEvent(this.events.onShow);
		this.modal.style.display = "block";
		return this;
	}

	/* Modalise.hide() :
	 *
	 * Hides the modal
	 */
	hide() {
		this.modal.dispatchEvent(this.events.onHide);
		this.modal.style.display = "none";
		return this;
	}

	/*
	* Modalise.removeEvents() :
	*
	* Removes the events (by cloning the modal)
	*/
	removeEvents() {
		const clone = this.modal.cloneNode(true);
		this.modal.parentNode.replaceChild(clone, this.modal);
		this.modal = clone;
		return this;
	}

	/*
	 * Modalise.on(event, callback):
	 *
	 * Connect an event.
	 *
	 * event:
	 *     - 'onShow': Called when the modal is shown (via Modalise.show() or a binded button)
	 *     - 'onConfirm': Called when the modal when the user sends the data (via the element with the class '.confirm')
	 *     - 'onHide': Called when the modal is hidden (via Modalise.hide() or a binded button)
	 * callback: The function to call on the event
	 *
	 */
	on(event, callback) {
		this.modal.addEventListener(event, callback);
		return this;
	}

	/*
	* Modalise.attach() :
	*
	* Attaches the click events on the elements with classes ".confirm", ".hide", ".cancel" plus the elements to show the modal
	*/
	attach() {
		let i;
		let items = [];
		const self = this;

		items = this.modal.querySelectorAll(self.classClose);
		for (i = items.length - 1; i >= 0; i--) {
			items[i].addEventListener('click', function(){
				self.hide();
			});
		}

		items = self.modal.querySelectorAll(self.classCancel);
		for (i = items.length - 1; i >= 0; i--) {
			items[i].addEventListener('click', function(){
				self.hide();
			});
		}

		items = self.modal.querySelectorAll(self.classConfirm);
		for (i = items.length - 1; i >= 0; i--) {
			items[i].addEventListener('click', function(){
				self.modal.dispatchEvent(self.events.onConfirm);
				self.hide();
			});
		}

		for (i = self.btnsOpen.length - 1; i >= 0; i--) {
			self.btnsOpen[i].addEventListener('click', function(){
				self.show();
			});
		}
		return self;
	}

	/*
	 * Attach an external element that will open the modal.
	 * Modalise.addOpenBtn(element)
	 *
	 * element: Any HTML element a button, div, span,...
	 */
	addOpenBtn(element) {
		this.btnsOpen.push(element);
	}
}

