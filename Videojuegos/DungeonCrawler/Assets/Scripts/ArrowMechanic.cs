using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ArrowMechanic : MonoBehaviour
{
    // determine the speed of the arrow
    [SerializeField] private float moveSpeed; 
    // Target position (mouse position)
    private Vector3 targetPos;
    // Boolean used to control click information
    private bool isClicked;

    private Transform playerTrans;
    private bool canComeBack;//default is false
    private bool returnWeapon;
    private Transform weaponTrans;

    public GameObject crosshairs;
    private Vector3 target; 


    // Start is called before the first frame update
    void Start()
    {
        playerTrans = GameObject.FindGameObjectWithTag("Main Character").GetComponent<Transform>();
    }
    // Update is called once per frame
    void Update()
    {
        target = Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, transform.position.z)); 
        crosshairs.transform.position = new Vector2(target.x , target.y);
        
        if (Input.GetMouseButtonDown(0) && isClicked == false)
        {
            isClicked = true;
            targetPos = new Vector3(Camera.main.ScreenToWorldPoint(Input.mousePosition).x,
                                         Camera.main.ScreenToWorldPoint(Input.mousePosition).y, 0);//MARKER SAVE the TARGET Position
        } 

        if(isClicked)
        {
            ThrowArrow();//MARKER If click, Throw the weapon
        }

        if(Vector2.Distance(transform.position, targetPos) <= 0.01f)
        {
            //isRotating = false;
            isClicked = false;//MARKER STEP 03 you can click again Or you can choose to delet this line which makes your weapon come back by press space bar
            canComeBack = true;
            //isDamage = false;//FIXME isDamage
        }

        if(Input.GetMouseButtonDown(0) && canComeBack)
        {
            returnWeapon = true;
            //isDamage = true;//FIXME isDamage
        }

        if(returnWeapon)
        {
            BackArrow();
        }

        if (Vector2.Distance(transform.position, playerTrans.position) <= 0.01f)
        {
            //isRotating = false;
            canComeBack = false;
            returnWeapon = false;
            isClicked = false;
            //isDamage = false;//FIXME isDamage

            //transform.rotation = new Quaternion(0, 0, 0, 0);//MARKER MAKING SURE the weapon is correct direction
        }
    }

    private void ThrowArrow()
    {
        Vector3 difference = targetPos - playerTrans.transform.position;
        float rotationZ = Mathf.Atan2(difference.y, difference.x) * Mathf.Rad2Deg;
        transform.position = Vector2.MoveTowards(transform.position, targetPos, moveSpeed * Time.deltaTime);
        transform.rotation = Quaternion.Euler(0.0f, 0.0f, rotationZ);
        //isDamage = true;//FIXME isDamage

        transform.SetParent(null);
    }

    private void BackArrow()
    {
        Vector3 difference = playerTrans.transform.position - transform.position;
        float rotationZ = Mathf.Atan2(difference.y, difference.x) * Mathf.Rad2Deg;
        //isRotating = true;
        transform.position = Vector2.MoveTowards(transform.position, playerTrans.position, moveSpeed * 2 * Time.deltaTime);
        transform.SetParent(playerTrans);
        transform.rotation = Quaternion.Euler(0.0f, 0.0f, rotationZ);
        

        //STEP 05
        /*if (Vector2.Distance(transform.position, playerTrans.position) <= 0.01f)
        {
            StartCoroutine(ComeBackEffect());
            Instantiate(weaponReturnEffect, playerTrans.position, Quaternion.identity);
        }*/
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if(other.gameObject.tag == "Enemy")
        {
            other.GetComponentInChildren<HealthBar>().hp -= 15;
        }
    }
}
