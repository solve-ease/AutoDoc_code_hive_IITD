const { expect } = require('chai');
const DocumentManagement = require('../contracts/DocumentManagement');

describe('DocumentManagement', () => {
    let contract;

    beforeEach(() => {
        contract = new DocumentManagement();
        contract.init();
    });

    it('should issue a document', () => {
        contract.issueDocument('user1', 'QmXYZ', 'ref123');
        const docs = contract.getUserDocuments('user1');
        expect(docs.length).to.equal(1);
        expect(docs[0].cid).to.equal('QmXYZ');
    });

    it('should return empty array for non-existent user', () => {
        const docs = contract.getUserDocuments('user2');
        expect(docs.length).to.equal(0);
    });
});